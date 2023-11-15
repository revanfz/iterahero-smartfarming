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

    if (!data) {
      return Boom.notFound("Tidak ada aktuator dengan id tersebut");
    }

    publishData(
      "iterahero2023/actuator",
      JSON.stringify({ pin: data.portRaspi })
    );
    return h
      .response({
        status: "success",
        message: `${data.name} berhasil dinyalakan`,
      })
      .code(200);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
};
