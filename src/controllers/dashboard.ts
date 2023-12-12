import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
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
    const jumlahAktuator = target.tandon.reduce(
      (temp, a) => temp + a._count.aktuator,
      0
    );
    const jumlahSensor = target.tandon.reduce(
        (temp, a) => temp + a._count.sensor,
        0
    ) + target.tandon.reduce((temp, a) => temp + a.tandonBahan.length, 0);

    return h
      .response({
        status: "success",
        data: {
          greenhouse: target._count.greenhouse,
          tandonBahan: jumlahTandon,
          actuator: jumlahAktuator,
          tandonPeracikan: target._count.tandon,
          sensor: jumlahSensor
        },
      })
      .code(200);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};

