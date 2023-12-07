import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import { createAutomation, deleteAutomation, onOffAutomation } from "../utils/agenda";

interface InputAutomation {
  id_aktuator: number;
  id_sensor: number;
  hari: number[];
  interval: number;
  duration: number;
  condition: string;
  action: boolean;
  iterasi: number;
  constant: number;
  startTime: string;
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_aktuator = parseInt(request.query.id);

    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID aktuator invalid");
    }

    const bySensor = await prisma.automationSensor.findMany({
      where: {
        aktuatorId: id_aktuator,
      },
      include: {
        aktuator: true,
        sensor: true
      }
    });

    const bySchedule = await prisma.automationSchedule.findUnique({
      where: {
        aktuatorId: id_aktuator,
      },
      include: {
        aktuator: true
      }
    });

    return h
      .response({
        status: "success",
        data: [...bySensor, bySchedule].filter(item => item !== null),
      })
      .code(200);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export const postHandler = async (request: Request, h: ResponseToolkit) => {
  const {
    id_aktuator,
    id_sensor,
    hari,
    interval,
    duration,
    condition,
    action,
    iterasi,
    constant,
    startTime,
  } = request.payload as InputAutomation;
  try {
    if (id_sensor) {
      await prisma.automationSensor.create({
        data: {
          aktuatorId: id_aktuator,
          sensorId: id_sensor,
          action,
          condition,
          constant,
        },
      });

      return h
        .response({
          status: "success",
          message: `Automasi berdasarkan sensor berhasil ditambahkan`,
        })
        .code(201);
    } else {
      const target = await prisma.automationSchedule.findUnique({
        where: {
          aktuatorId: id_aktuator,
        },
      });
      if (target) {
        return Boom.badRequest("Cuma bisa 1 co");
      }

      const data = await prisma.automationSchedule.create({
        data: {
          aktuatorId: id_aktuator,
          interval,
          duration,
          iterasi,
          startTime,
        },
      });

      await createAutomation(data);

      return h
        .response({
          status: "success",
          message: "Automasi berdasarkan jadwal berhasil ditambahkan",
        })
        .code(201);
    }
  } catch (e) {
    console.error(e);
    await prisma.automationSchedule.delete({
        where: {
          aktuatorId: id_aktuator,
        },
      });
    if (e instanceof Error) {
      return Boom.internal(e.message);
    } else if (typeof e === "string") {
      return Boom.badRequest(e);
    }
   
  } finally {
    await prisma.$disconnect();
  }
};

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_aktuator = parseInt(request.query.id);

    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID aktuator invalid");
    }
    const target = await prisma.aktuator.findUnique({
      where: {
        id: id_aktuator,
      },
    });

    if (!target) {
      return Boom.notFound("Tidak ada aktuator dengan id tersebut");
    }

    const data = await prisma.automationSchedule.findUnique({
      where: {
        aktuatorId: target.id,
      },
    });

    if (!data) {
      return Boom.notFound(`${target.name} belum mempunyai automasi`);
    }

    await onOffAutomation(data.aktuatorId, data.isActive);

    return h.response({
      status: "success",
      message: `Automasi ${target.name} berhasil di-${
        data.isActive ? "matikan" : "aktifkan"
      }`,
    });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const { id_automation } = request.payload as { id_automation: number }
    // const { id_aktuator } = request.payload as { id_aktuator: number }
    const { type } = request.query;

    if (isNaN(id_automation)) {
      return Boom.badRequest("ID aktuator tidak valid")
    }

    if (type === "bySensor") {
      const { id_sensor } = request.payload as { id_sensor: number }
      if (isNaN(id_sensor)) {
        return  Boom.badRequest("ID sensor tidak valid")
      }
      
      const deletedSensor = await prisma.automationSensor.deleteMany({
        where: {
          id: id_automation,
        }
      })

      return h.response({
        status: 'success',
      message: `Automasi sensor berhasil dihapus`
      }).code(201);
    }
    else if (type === "bySchedule") {
      const deletedSchedule = await prisma.automationSchedule.delete({
        where: {
          id: id_automation
        }
      })

      await deleteAutomation(id_automation)
      
      return h.response({
        status: 'succes',
        message: "Automasi jadwaln berhasil dihapus"
      }).code(201)
    }

  }
  catch (e) {
    console.error(e)
    if (e instanceof Error) {
      return Boom.internal(e.message)
    }
  }
  finally {
    await prisma.$disconnect()
  }
}