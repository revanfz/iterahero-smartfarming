import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";

interface InputResep {
  resep: number;
  id_tandon: number;
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { resep, id_tandon } = request.payload as InputResep;
    const komposisi = await prisma.resep.findFirst({
      where: {
        id: resep,
      },
    });

    const rasio = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
      select: {
        rasioA: true,
        rasioB: true,
        rasioAir: true,
        ppm: true,
        aktuator: {
          where: {
            name: {
              contains: "Selenoid",
            },
          },
          select: {
            microcontrollerId: true,
          },
        },
      },
    });

    if (!komposisi) {
      return Boom.notFound(`Tidak ada resep dengan nama: ${resep}`);
    } else if (!rasio) {
      return Boom.badRequest(
        "Konstanta pupuk belum diatur pada tandon peracikan"
      );
    }

    return publishData(
      "iterahero2023/peracikan",
      JSON.stringify({
        komposisi,
        konstanta: rasio,
      }),
      rasio?.aktuator[0].microcontrollerId ?? 0
    )
      .then(() => {
        return h
          .response({
            status: "success",
            message: komposisi,
          })
          .code(200);
      })
      .catch(async (error) => {
        console.error("Error in publish data: ", error);
        await prisma.tandon.update({
          where: {
            id: id_tandon
          },
          data: {
            isOnline: false
          }
        })
        return Boom.serverUnavailable(
          "Mikrokontroller tidak terhubung ke internet"
        );
      });
  } catch (e) {
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
};
