import { Request, ResponseToolkit } from "@hapi/hapi";
import prisma from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number
    }

    const target = await prisma.user.findUnique({
      where: {
        id: id_user,
      },
      select: {
        _count: {
          select: {
            greenhouse: true,
            tandon: true,
          },
        },
        greenhouse: {
          select: {
            _count: {
              select: {
                aktuator: true,
                sensor: true
              },
            },
          },
        },
        tandon: {
          select: {
            _count: {
              select: {
                tandonBahan: true,
                aktuator: true,
                sensor: true,
              },
            },
            tandonBahan: {
                select: {
                    _count: {
                        select: {
                            sensor: true
                        }
                    }
                }
            },
          },
        },
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada peracikan");
    }
    
    const jumlahTandon = target.tandon.reduce(
      (temp, a) => temp + a._count.tandonBahan,
      0
    );
    const jumlahAktuatorTandon = target.tandon.reduce(
      (temp, a) => temp + a._count.aktuator,
      0
    );

    const jumlahAktuatorGreenhouse = target.greenhouse.reduce(
      (temp, a) => temp + a._count.aktuator, 0
    );

    const jumlahSensorTandon = target.tandon.reduce(
        (temp, a) => temp + a._count.sensor,
        0
    );

    const jumlahSensorGreenhouse = target.greenhouse.reduce(
      (temp, a) => temp + a._count.sensor, 0
    );

    return h
      .response({
        status: "success",
        data: {
          greenhouse: target._count.greenhouse,
          tandonBahan: jumlahTandon,
          actuator: jumlahAktuatorTandon + jumlahAktuatorGreenhouse,
          tandonPeracikan: target._count.tandon,
          sensor: jumlahSensorTandon + jumlahSensorGreenhouse
        },
      })
      .code(200);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};

