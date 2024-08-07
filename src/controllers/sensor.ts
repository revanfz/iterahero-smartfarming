import { Request, ResponseToolkit } from "@hapi/hapi";
import prisma from "../config/prisma";
import Boom from "@hapi/boom";

interface SensorInput {
  name: string;
  id_greenhouse: number,
  id_tandon: number,
  brand: string;
  calibration: string;
  unit_measurement: string;
  type: string;
  range_min?: number;
  range_max?: number;
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  const id = parseInt(request.query.id);
  const size = parseInt(request.query.size);
  const cursor = parseInt(request.query.cursor);
  const filter = request.query.filter;
  try {
    let data;
    if (!isNaN(id)) {
      data = await prisma.sensor.findUnique({
        where: {
          id,
        },
        include: {
          category: {
            select: {
              logo: true,
              name: true,
              color: true,
              satuan: true
            },
          },
          microcontroller: true
        },
      });
    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
    } else if (filter) {
      if (filter === 'greenhouse') {
        data = await prisma.sensor.findMany({
          where: {
            greenhouseId: {
              not: null
            }
          }
        })
      } else if (filter === 'tandon') {
        data = await prisma.sensor.findMany({
          where: {
            tandonId: {
              not: null
            }
          }
        })
      }
      return h.response({
        status: 'success',
        data,
      }).code(200)
    } 
    else {
      const total = await prisma.sensor.count();
      data = await prisma.sensor.findMany({
        include: {
          category: {
            select: {
              logo: true,
              name: true,
              color: true,
              satuan: true
            },
          },
        },
        take: size ? size : 100,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });

      return h
        .response({
          status: "success",
          data,
          cursor: id ?? data[data.length - 1]?.id,
          totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        })
        .code(200);
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      return Boom.badImplementation(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const {
      name,
      brand,
      calibration,
      unit_measurement,
      type,
      range_min,
      range_max,
      id_greenhouse,
      id_tandon
    } = request.payload as SensorInput;

    const sensor = await prisma.sensor.create({
      data: {
        greenhouseId: id_greenhouse,
        tandonId: id_tandon,
        name,
        brand,
        calibration,
        unit_measurement,
        type,
        range_min,
        range_max,
      },
    });

    return h.response({
      status: "success",
      message: `${sensor.name} berhasil ditambahkan`,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_sensor = parseInt(request.query.id);

    if (isNaN(id_sensor)) {
      return Boom.badRequest("ID Sensor tidak valid");
    }

    const {
      name,
      brand,
      calibration,
      unit_measurement,
      type,
      range_min,
      range_max,
    } = request.payload as SensorInput;

    const target = await prisma.sensor.findUnique({
      where: {
        id: id_sensor,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada id tersebut");
    }

    await prisma.sensor.update({
      where: {
        id: id_sensor,
      },
      data: {
        name,
        brand,
        calibration,
        unit_measurement,
        type,
        range_max,
        range_min,
      },
    });

    return h.response({
      status: "success",
      message: `${target.name} berhasil diperbarui`,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_sensor = parseInt(request.query.id);

    if (isNaN(id_sensor)) {
      return Boom.badRequest("ID Sensor tidak valid");
    }

    const target = await prisma.sensor.findUnique({
      where: {
        id: id_sensor,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada sensor dengan id tersebut");
    }

    await prisma.sensor.delete({
      where: {
        id: id_sensor,
      },
    });

    return h.response({
      status: "success",
      message: `${target.name} berhasil dihapus`,
    });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.badImplementation(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};
