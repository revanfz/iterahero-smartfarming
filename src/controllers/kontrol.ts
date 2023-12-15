import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import { publishData } from "../config/mqtt";

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id, microcontrollerId } = request.query;
    const data = await prisma.aktuator.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (data?.microcontrollerId) {
      const target = await prisma.microcontroller.findUnique({
        where: {
          id: data?.microcontrollerId
        }
      })
      if (!data) {
        return Boom.notFound("Tidak ada aktuator dengan id tersebut");
      }
      await prisma.aktuator.updateMany({
        where: {
          GPIO: data.GPIO
        },
        data: {
          status: !data.status
        }
      })
  
      publishData(
        "iterahero2023/kontrol",
        JSON.stringify({ pin: data.GPIO, state: !data.status, microcontroller: target?.name })
      );
  
      return h
        .response({
          status: "success",
          message: `${data.name} berhasil ${data.status ? 'dimatikan' : 'dinyalakan'}`,
        })
        .code(200);
    } else {
        return Boom.badRequest("Sensor belum terhubung ke microcontroller");
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};
