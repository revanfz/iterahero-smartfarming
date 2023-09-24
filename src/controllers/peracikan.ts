import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

interface InputPeracikan {
  id_greenhouse: number;
  ppm?: number;
  ph?: number;
  nama?: string;
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const input = request.payload as InputPeracikan;
    if (input.nama) {
      // Mau nambahin resep berarti
    }
    const data = await prisma.peracikan.findMany({
      where: {
        greenhouseId: input.id_greenhouse,
      },
      include: {
        penjadwalan: true,
      },
    });

    if (!data) {
      return Boom.notFound("Data tidak ditemukan");
    }

    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  prisma.$disconnect();
};

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_greenhouse } = request.query as InputPeracikan;
    const data = await prisma.peracikan.findFirst({
      where: {
        greenhouseId: id_greenhouse,
      },
    });
    if (!data) {
      return Boom.notFound("Data tidak ditemukan");
    }
    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  prisma.$disconnect();
};
