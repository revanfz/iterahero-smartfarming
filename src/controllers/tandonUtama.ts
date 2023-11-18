import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const id = parseInt(request.query.id);
    let data;
    if (isNaN(id)) {
      data = await prisma.tandon.findMany({
        where: {
          userId: id_user,
        },
      });
    } else {
      data = await prisma.tandon.findUnique({
        where: {
          id,
        },
      });
    }

    if (!data) {
      return Boom.notFound("Tidak ada tandon terpilih");
    }

    return h
      .response({
        status: "success",
        data,
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

export const sensorByTandonHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  const id = parseInt(request.params.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    const total = await prisma.sensor.count({
      where: {
        tandon: {
          id,
        },
      },
    });
    const data = await prisma.sensor.findMany({
      where: {
        tandon: {
          id,
        },
      },
      include: {
        icon: {
          select: {
            logo: true,
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
      console.error(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const actuatorByTandonHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  const id = parseInt(request.params.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  try {
    const total = await prisma.aktuator.count({
      where: {
        tandonId: id,
      },
    });
    const data = await prisma.aktuator.findMany({
      where: {
        tandonId: id,
      },
      take: size ? size : 100,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
    });

    // if (data.length < 1) {
    //     return Boom.notFound("Tidak ada aktuator")
    // }

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
        totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_tandon, ppm, rasioA, rasioB, rasioAir } = request.payload as {
      id_tandon: number;
      ppm: number;
      rasioA: number;
      rasioB: number;
      rasioAir: number;
    };

    const target = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada tandon terpilih.");
    }

    await prisma.tandon.update({
      where: {
        id: id_tandon,
      },
      data: {
        ppm,
        rasioA,
        rasioB,
        rasioAir,
      },
    });

    return h.response({
      status: "success",
      message: `Rasio ${target.nama} berhasil diperbarui`,
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};
