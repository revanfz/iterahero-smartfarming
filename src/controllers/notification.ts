import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import { prisma } from "../config/prisma";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  const read = request.query.isRead;
  let data;
  const { id_user } = request.auth.credentials as {
    id_user: number;
  };
  try {
    if (read === "false") {
      data = await prisma.notification.findMany({
        where: {
          userId: id_user,
          read: false
        },
        orderBy: {
          created_at: 'desc'
        },
        cursor: cursor ? { id: cursor } : undefined,
        take: size ? size : 100,
        skip: cursor ? 1 : 0,
      })
    }

    data = await prisma.notification.findMany({
      where: {
        userId: id_user,
      },
      orderBy: {
        created_at: 'desc'
      },
      cursor: cursor ? { id: cursor } : undefined,
      take: size ? size : 100,
      skip: cursor ? 1 : 0,
    });

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id } = request.payload as { id: number[] };

    const updatePromise = id.map((identifier) => {
      prisma.notification.update({
        where: {
          id: identifier,
        },
        data: {
          read: true,
        },
      });
    });
    await Promise.all(updatePromise);

    return h.response({
      status: 'success',
      message: 'Notifikasi telah dibaca'
    }).code(200)
    
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  const { id_user } = request.auth.credentials as {
    id_user: number;
  };

  try {
    for (let i = 0; i < 3; i++) {
      await prisma.notification.create({
        data: {
          message: `Hello ${i}`,
          read: false,
          userId: id_user,
        },
      });
    }

    return h.response({
      status: "success",
      message: "Notif ditambahin",
    });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
};
