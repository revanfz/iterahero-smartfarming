import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

interface InputResep {
  nama: string;
  ppm: number;
  ph: number;
  volume: number;
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const tipe = request.query.tipe;
    const data = await prisma.resep.findMany({
      where: {
        tipe,
      },
    });

    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { nama, ppm, ph, volume} =
      request.payload as InputResep;

    await prisma.resep.create({
      data: {
        nama,
        ppm,
        ph,
        volume,
      },
    });

    return h
      .response({
        status: "success",
        message: `Resep ${nama} berhasil ditambahkan`,
      })
      .code(201);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      console.log(e.stack)
      return Boom.internal(e.stack?.toString());
    }
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id);
    if (isNaN(id)) {
      return Boom.badRequest("ID tidak valid");
    }

    await prisma.resep.delete({
      where: {
        id,
      },
    });

    return h
      .response({
        status: "success",
        message: "Resep berhasil dihapus",
      })
      .code(201);
  } catch (e) {
    await prisma.$disconnect();
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal("ID tidak ditemukan");
    }
  }
};
