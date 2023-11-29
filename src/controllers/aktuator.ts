import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const id = parseInt(request.query.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  let data;
  let total = 0;
  try {
    if (id) {
      data = await prisma.aktuator.findUnique({
        where: {
          id: id,
        },
        include: {
          icon: {
            select: {
              logo: true,
              name: true,
              color: true,
            }
          }
        }
      });
    } else {
      total = await prisma.aktuator.count({
        where: {
          tandonId: id,
        },
      });
      data = await prisma.aktuator.findMany({
        where: {
          tandonId: id,
        },
        include: {
          icon: {
            select: {
              logo: true,
              name: true,
              color: true,
            }
          }
        },
        skip: cursor ? 1 : 0,
        take: size ? size : 100,
        cursor: cursor ? { id: cursor } : undefined,
      });
    }

    // if (!data || (Array.isArray(data) && data.length < 1)) {
    //   return Boom.notFound("Tidak ada aktuator");
    // }

    const res = {
      status: "success",
      data,
      cursor: -1,
      totalPage: 1,
    };

    if (Array.isArray(data)) {
      res.cursor = data[data.length - 1]?.id;
      res.totalPage = size ? Math.ceil(total / size) : Math.ceil(total / 100);
    }

    return h.response(res).code(200);
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
