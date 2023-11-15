import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";

interface InputResep {
  nama: string;
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { nama } = request.payload as InputResep;
    const data = await prisma.resep.findFirst({
      where: {
        nama,
      },
    });

    if (!data) {
      return Boom.notFound(`Tidak ada resep dengan nama: ${nama}`);
    }

    publishData("iterahero/peracikan", JSON.stringify(data));
    return h
      .response({
        status: "success",
        message: data,
      })
      .code(200);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
};
