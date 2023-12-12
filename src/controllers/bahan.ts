import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { prisma } from "../config/prisma";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const data = await prisma.tandonBahan.findMany({
      include: {
        sensor: true,
      },
    });

    if (data.length < 1) {
      return Boom.notFound("Tidak ada bahan");
    }

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
        totalPage: Math.ceil(data.length / 100),
      })
      .code(200);
  } catch (e) {
    // await prisma.$disconnect();
    if (e instanceof Error) {
        console.log(e)
      return Boom.internal(e.message);
    }
  }
};
