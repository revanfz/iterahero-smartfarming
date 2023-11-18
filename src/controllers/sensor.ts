import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    const total = await prisma.sensor.count();
    const data = await prisma.sensor.findMany({
      include: {
        icon: {
          select: {
            logo: true
          }
        }
      },
      take: size ? size : 100,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
    });

    // if (data.length < 1) {
    //     return Boom.notFound("Tidak ada sensor")
    // }

    return h.response({
      status: "success",
      data,
      cursor: data[data.length - 1]?.id,
      totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};
