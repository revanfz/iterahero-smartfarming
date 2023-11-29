import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const id = parseInt(request.query.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    let data;
    if (!isNaN(id)) {
      data = await prisma.sensor.findUnique({
        where: {
          id
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
      })

      if (!data) {
        return Boom.notFound(`Tidak ada sensor dengan id ${id}`)
      } else {
        return h.response({
          status: "success",
          data
        }).code(200)
      }
    } else {
      const total = await prisma.sensor.count();
      data = await prisma.sensor.findMany({
        include: {
          icon: {
            select: {
              logo: true,
              name: true,
              color: true,
            }
          }
        },
        take: size ? size : 100,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });

      return h.response({
        status: "success",
        data,
        cursor: id ?? data[data.length - 1]?.id,
        totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
      }).code(200);
    }    
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
