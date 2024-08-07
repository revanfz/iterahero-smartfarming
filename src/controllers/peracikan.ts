import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import prisma from "../config/prisma";
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
        volume: true,
        aktuator: {
          where: {
            name: {
              contains: "Solenoid",
            },
          },
          select: {
            microcontroller: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          take: 1,
        },
        capacity: true,
      },
    });

    if (!komposisi) {
      return Boom.notFound(`Tidak ada resep dengan nama: ${resep}`);
    } else if (!tandon) {
      return Boom.badRequest(
        "Konstanta pupuk belum diatur pada tandon peracikan"
      );
    } else if (
      tandon.capacity < komposisi.volume ||
      tandon.volume + komposisi.volume > tandon.capacity
    ) {
      return Boom.badRequest("Volume melebihi kapasitas tandon");
    }
    try {
      await publishData(
        "iterahero2023/peracikan",
        JSON.stringify({
          komposisi,
          konstanta: tandon,
        }),
        tandon?.aktuator[0].microcontroller?.id ?? 0
      )
    }
    catch (e) {
      console.error("Error in publish data: ", e);
      await prisma.tandon.update({
        where: {
          id: id_tandon,
        },
        data: {
          isOnline: false,
        },
      });
      await prisma.notification.create({
        data: {
          userId: id_user,
          header: "Peracikan gagal dilakukan",
          message:
            "Peracikan gagal dilakukan, mikrokontroller tidak terhubung ke internet",
          loc: tandon.nama + ", " + tandon.location,
        },
      });
      return Boom.serverUnavailable(
        "Mikrokontroller tidak terhubung ke internet"
      );
    }
      await prisma.notification.create({
        data: {
          userId: id_user,
          header: `Peracikan ${komposisi.nama} dimulai`,
          message: `Peracikan ${komposisi.nama} dimulai, PH target: ${komposisi.ph_min} - ${komposisi.ph_max}, PPM target ${komposisi.ppm_min} - ${komposisi.ppm_max}`,
          loc: tandon.nama + ", " + tandon.location,
        },
      });
      const selectedActuator = await prisma.aktuator.findMany({
        where: {
          microcontrollerId: tandon.aktuator[0].microcontroller?.id,
        },
        select: {
          id: true,
          name: true,
        },
      });
      for (const act of selectedActuator) {
        await AktuatorLog.create({
          id_aktuator: act.id,
          message: `${act.name} menyala`,
          status: true,
        });
      }
      return h
        .response({
          status: "success",
          message: komposisi,
        })
        .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
};

export const cancelPeracikanHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const actor = await prisma.user.findUnique({
      where: {
        id: id_user,
      },
      select: {
        username: true,
      },
    });
    const { id_tandon } = request.payload as {
      id_tandon: number;
    };
    const tandon = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
      include: {
        microcontroller: true,
        aktuator: true,
      },
    });
    if (tandon) {
      try {
        await publishData(
          "iterahero2023/peracikan/cancel",
          JSON.stringify({
            microcontroller: tandon.microcontroller[0].name,
          }),
          tandon.microcontroller[0].id
        );
      } catch (error) {
        console.error("Error in publish data: ", error);
        await prisma.notification.create({
          data: {
            userId: id_user,
            header: "Peracikan gagal dibatalkan",
            message:
              "Peracikan gagal dibatalkan, mikrokontroller tidak terhubung ke internet",
            loc: tandon.nama + ", " + tandon.location,
          },
        });
        return Boom.serverUnavailable(
          "Mikrokontroller tidak terhubung ke internet"
        );
      }
      await prisma.notification.create({
        data: {
          userId: id_user,
          header: "Peracikan dibatalkan",
          message: "Peracikan dibatalkan dengan manual oleh " + actor?.username,
          loc: tandon.nama + "," + tandon.location,
        },
      });
      for (const act of tandon.aktuator) {
        await AktuatorLog.create({
          id_aktuator: act.id,
          message: `${act.name} dimatikan`,
          status: false,
        });
      }
      return h.response({
        status: "success",
        message: "Peracikan dibatalkan",
      });
    } else {
      return Boom.notFound("Tandon tidak ditemukan");
    }
  } catch (e) {
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  }
};
