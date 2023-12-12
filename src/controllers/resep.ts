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
    const data = await prisma.resep.findMany();
    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (e) {
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  }
  finally {
    // await prisma.$disconnect();
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
    if (e instanceof Error) {
      console.log(e.stack)
      return Boom.internal(e.stack?.toString());
    }
  }
  finally {
    // await prisma.$disconnect();
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
    if (e instanceof Error) {
      console.log(e);
      return Boom.internal("ID tidak ditemukan");
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id)
    const { nama, ppm, ph, volume} =
      request.payload as InputResep;
    const data = await prisma.resep.findUnique({
      where: {
        id
      }
    })

    if(!data) {
      return Boom.notFound("Tidak ada id resep tersebut")
    }

    await prisma.resep.update({
      where: {
        id
      },
      data: {
        ppm,
        ph,
        volume,
        nama
      }
    })

    return h.response({
      status: 'success',
      message: `Resep ${nama} berhasil diubah`
    });
  }
  catch (e) {
    if (e instanceof Error) {
      console.log(e)
      return Boom.internal(e.message)
    }
  }
  finally {
    // await prisma.$disconnect()
  }
}
