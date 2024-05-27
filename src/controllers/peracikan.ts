import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";
import AktuatorLog from "../models/AktuatorLog";

interface InputResep {
  resep: number;
  id_tandon: number;
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { resep, id_tandon } = request.payload as InputResep;
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const komposisi = await prisma.resep.findFirst({
      where: {
        id: resep,
      },
    });

    const tandon = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
      select: {
        nama: true,
        location: true,
        rasioA: true,
        rasioB: true,
        rasioAir: true,
        ppm: true,
        aktuator: {
          where: {
            name: {
              contains: "Selenoid",
            },
          },
          select: {
            microcontroller: {
              select: {
                id: true,
                name: true
              }
            },
          },
          take: 1
        },
        capacity: true
      },
    });

    if (!komposisi) {
      return Boom.notFound(`Tidak ada resep dengan nama: ${resep}`);
    } else if (!tandon) {
      return Boom.badRequest(
        "Konstanta pupuk belum diatur pada tandon peracikan"
      );
    } else if (tandon.capacity < komposisi.volume) {
      return Boom.badRequest(
        "Volume melebihi kapasitas tandon"
      )
    }

    return publishData(
      "iterahero2023/peracikan",
      JSON.stringify({
        komposisi,
        konstanta: tandon,
      }),
      tandon?.aktuator[0].microcontroller?.id ?? 0
    )
      .then(async() => {
        await prisma.notification.create({
          data: {
            userId: id_user,
            message: `Peracikan ${komposisi.nama} dimulai`,
            loc: tandon.nama + ", " + tandon.location
          }
        })
        const selectedActuator = await prisma.aktuator.findMany({
          where: {
            microcontrollerId: tandon.aktuator[0].microcontroller?.id
          },
          select: {
            id: true,
            name: true
          }
        })
        for (const act in selectedActuator) {
          await AktuatorLog.create({
            id_aktuator: selectedActuator[act].id,
            message: `${selectedActuator[act].name} menyala`,
            status: true
          })
        }
        return h
          .response({
            status: "success",
            message: komposisi,
          })
          .code(200);
      })
      .catch(async (error) => {
        console.error("Error in publish data: ", error);
        await prisma.tandon.update({
          where: {
            id: id_tandon
          },
          data: {
            isOnline: false
          }
        })
        await prisma.notification.create({
          data: {
            userId: id_user,
            message: "Peracikan gagal dilakukan, mikrokontroller tidak terhubung ke internet",
            loc: tandon.nama + ", " + tandon.location
          }
        })
        return Boom.serverUnavailable(
          "Mikrokontroller tidak terhubung ke internet"
        );
      });
  } catch (e) {
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
};

export const cancelPeracikanHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number
    }
    const { id_tandon } = request.payload as {
      id_tandon: number
    }
    const tandon = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
      include: {
        microcontroller: true,
        aktuator: true
      }
    })
    if (tandon) {
      publishData(
        "iterahero2023/peracikan/cancel",
        JSON.stringify({
          microcontroller: tandon.microcontroller[0].id
        }),
        tandon.microcontroller[0].id
      ).then(async () => {
        await prisma.notification.create({
          data: {
            userId: id_user,
            message: "Peracikan dibatalkan",
            loc: tandon.nama + "," + tandon.location
          }
        })
        for (const act in tandon.aktuator) {
          await AktuatorLog.create({
            id_aktuator: tandon.aktuator[act].id,
            message: `${tandon.aktuator[act].name} dimatikan`,
            status: false
          })
        }
        return h.response({
          status: "success",
          message: "Peracikan dibatalkan"
        })
      }).catch(async (error) => {
        console.error("Error in publish data: ", error);
        await prisma.notification.create({
          data: {
            userId: id_user,
            message: "Peracikan gagal dibatalkan, mikrokontroller tidak terhubung ke internet",
            loc: tandon.nama + ", " + tandon.location
          }
        })
        return Boom.serverUnavailable(
          "Mikrokontroller tidak terhubung ke internet"
        );
      })
    }
  }
  catch (e) {
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
}