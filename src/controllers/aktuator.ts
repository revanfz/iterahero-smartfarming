import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

interface AktuatorInput {
  name: string;
  merek: string;
  id_greenhouse: number;
  id_tandon: number;
  type: string;
}

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
          category: {
            select: {
              logo: true,
              name: true,
              color: true,
              satuan: true
            },
          },
        },
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
          category: {
            select: {
              logo: true,
              name: true,
              color: true,
            },
          },
        },
        skip: cursor ? 1 : 0,
        take: size ? size : 100,
        cursor: cursor ? { id: cursor } : undefined,
      });
    }

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
  } finally {
    // await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { name, merek, id_greenhouse, id_tandon, type } =
      request.payload as AktuatorInput;

    const aktuator = await prisma.aktuator.create({
      data: {
        name,
        merek,
        greenhouseId: id_greenhouse ?? null,
        tandonId: id_tandon ?? null,
        type,
      },
    });

    return h.response({
      status: "success",
      message: `${aktuator.name} berhasil ditambahkan`,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_aktuator = parseInt(request.query.id);

    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID Sensor tidak valid");
    }

    const { name, merek, type } =
      request.payload as AktuatorInput;

    const target = await prisma.aktuator.findUnique({
      where: {
        id: id_aktuator,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada id tersebut");
    }

    await prisma.aktuator.update({
      where: {
        id: id_aktuator,
      },
      data: {
        name,
        merek,
        type,
      },
    });

    return h.response({
      status: "success",
      message: `${target.name} berhasil diperbarui`,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_aktuator = parseInt(request.query.id);

    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID aktuator  tidak valid");
    }

    const target = await prisma.aktuator.findUnique({
      where: {
        id: id_aktuator,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada sensor dengan id tersebut");
    }

    await prisma.aktuator.delete({
      where: {
        id: id_aktuator,
      },
    });

    return h.response({
      status: "success",
      message: `${target.name} berhasil dihapus`,
    });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};
