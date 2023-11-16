import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import {
  deletePeracikan,
  onOffPeracikan,
  schedulePeracikan
} from "../utils/schedule";

interface InputPenjadwalan {
  id_tandon: number;
  resep: string;
  waktu: string[];
  durasi: number;
  hari: number[];
  id_greenhouse: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const size = request.query.size;
  const cursor = request.query.cursor;
  try {
    const total = await prisma.penjadwalan.count();
    const data = await prisma.penjadwalan.findMany({
      include: {
        resep: true,
      },
      orderBy: [
        {
          waktu: "asc",
        },
        {
          hari: "asc",
        },
      ],
      take: size ? size : 100,
      skip: parseInt(cursor) ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
    });

    return h
      .response({
        status: "success",
        data,
        cursor: data[data.length - 1]?.id,
        totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
      })
      .code(200);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const { resep, id_tandon, waktu, hari, durasi, id_greenhouse } =
      request.payload as InputPenjadwalan;
    const resepTarget = await prisma.resep.findFirst({
      where: {
        nama: resep,
      },
    });

    if (!resepTarget) {
      return Boom.notFound("Tidak ada resep yang sesuai");
    }

    const isJadwalExist = await prisma.penjadwalan.findFirst({
      where: {
        waktu: {
          in: waktu,
        },
        hari: {
          hasSome: hari,
        },
        tandonId: {
          equals: id_tandon,
        },
      },
    });

    if (isJadwalExist) {
      const error = Boom.badRequest(
        `Sudah ada peracikan di jam ${isJadwalExist.waktu}`
      );
      error.output.payload.data = {
        status: isJadwalExist.isActive ? "enabled" : "disabled",
        hari,
      };
      return error;
    }

    waktu.forEach(async (item) => {
      const schedule = await prisma.penjadwalan.create({
        data: {
          resepId: resepTarget.id,
          waktu: item,
          tandonId: id_tandon,
          isActive: true,
          hari,
          durasi,
          createdBy: id_user,
          greenhouseId: id_greenhouse
        },
      });
      await schedulePeracikan(schedule.id, schedule.waktu, schedule.hari, schedule.resepId, schedule.durasi, schedule.greenhouseId)
    });

    return h
      .response({
        status: "success",
        message: "Penjadwalan telah dibuat",
      })
      .code(201);
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

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id);

    await prisma.penjadwalan.delete({
      where: {
        id,
      },
    });

    deletePeracikan(id);

    return h
      .response({
        status: "success",
        message: "Penjadwalan berhasil dihapus",
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.notFound("Tidak ada penjadwalan dengan id tersebut");
    }
  }
  finally {
    await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id } = request.payload as { id: number };
    const targetWaktu = await prisma.penjadwalan.findUnique({
      where: { id },
    });

    if (targetWaktu) {
      await prisma.penjadwalan.update({
        where: { id },
        data: {
          isActive: !targetWaktu.isActive,
        },
      });
    } else {
      return Boom.notFound("Penjadwalan terpilih tidak ditemukan");
    }

    onOffPeracikan(id);

    return h
      .response({
        status: "success",
        message: `Penjadwalan berhasil di-${
          targetWaktu.isActive ? "nonaktifkan" : "aktifkan"
        }`,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    await prisma.$disconnect();
  }
};
