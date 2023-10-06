import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import jwt from "jsonwebtoken";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const token = request.auth.credentials;
    const { email, role } = jwt.decode(token.toString()) as {
      email: string;
      role: string;
    };

    const target = await prisma.user.findUnique({
      where: {
        email,
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
                selenoid: true,
              },
            },
          },
        },
        tandon: {
          select: {
            _count: {
              select: {
                tandonBahan: true,
                selenoid: true,
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
    // console.log(JSON.stringify(target));
    
    const jumlahTandon = target.tandon.reduce(
      (temp, a) => temp + a._count.tandonBahan,
      0
    );
    const jumlahSelenoid = target.tandon.reduce(
      (temp, a) => temp + a._count.selenoid,
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
          selenoid: jumlahSelenoid,
          tandonPeracikan: target._count.tandon,
          sensor: jumlahSensor
        },
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  prisma.$disconnect();
};
