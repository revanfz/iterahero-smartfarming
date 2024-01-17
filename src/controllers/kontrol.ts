import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import { publishData } from "../config/mqtt";

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id } = request.query;
    const data = await prisma.aktuator.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (data?.microcontrollerId) {
      const target = await prisma.microcontroller.findUnique({
        where: {
          id: data?.microcontrollerId,
        },
      });

      if (!data) {
        return Boom.notFound("Tidak ada aktuator dengan id tersebut");
      }

      if (!target) {
        return Boom.badRequest("Aktuator belum terhubung ke microcontroller");
      }

      return publishData(
        "iterahero2023/kontrol",
        JSON.stringify({
          pin: data.GPIO,
          state: !data.isActive,
          microcontroller: target?.name,
        }),
        target.id
      )
        .then(() => {
          prisma.aktuator
            .updateMany({
              where: {
                GPIO: data.GPIO,
                microcontrollerId: data.microcontrollerId
              },
              data: {
                isActive: !data.isActive,
              },
            })
            .then(() => {
              return h
                .response({
                  status: "success",
                  message: `${data.name} berhasil ${
                    data.isActive ? "dimatikan" : "dinyalakan"
                  }`,
                })
                .code(200);
            })
            .catch((e) => {
              return Boom.badImplementation(e.message);
            });
        })
        .catch((error) => {
          console.error("Error in publish data: ", error);
          return Boom.serverUnavailable("Mikrokontroller tidak terhubung ke internet");
        });
      }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.badImplementation(e.message);
    }
  }
};
