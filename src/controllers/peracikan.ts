import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";

interface InputResep {
  resep: number
  id_tandon: number
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { resep, id_tandon  } = request.payload as InputResep;
    const komposisi = await prisma.resep.findFirst({
      where: {
        id: resep,
      },
    });

    const rasio = await prisma.tandon.findUnique({
      where: {
        id: id_tandon
      },
      select: {
        rasioA: true,
        rasioB: true,
        rasioAir: true,
        ppm: true
      }
    })

    publishData("iterahero2023/peracikan", JSON.stringify({
      komposisi,
      konstanta: rasio,
    }));

    
    if (!komposisi) {
      return Boom.notFound(`Tidak ada resep dengan nama: ${resep}`);
    } else if (!rasio) {
      return Boom.badRequest("Konstanta pupuk belum diatur pada tandon peracikan")
    }

    return h
      .response({
        status: "success",
        message: komposisi,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};
