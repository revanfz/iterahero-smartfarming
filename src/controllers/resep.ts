import { Request, ResponseToolkit } from "@hapi/hapi";
import prisma from "../config/prisma";
import Boom from "@hapi/boom";

interface InputResep {
  nama: string;
  ppm_min: number;
  ppm_max: number;
  ph_min: number;
  ph_max: number;
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
      return Boom.badImplementation(e.message);
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { nama, ppm_min, ppm_max, ph_min, ph_max, volume} =
      request.payload as InputResep;

    await prisma.resep.create({
      data: {
        nama,
        ppm_min,
        ppm_max,
        ph_min,
        ph_max,
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
      return Boom.badImplementation(e.stack?.toString());
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
      return Boom.badImplementation("ID tidak ditemukan");
    }
  }
  finally {
    // await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.query.id)
    const { nama, ppm_min, ppm_max, ph_max, ph_min, volume} =
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
        ppm_min,
        ppm_max,
        ph_min,
        ph_max,
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
      return Boom.badImplementation(e.message)
    }
  }
  finally {
    // await prisma.$disconnect()
  }
}
