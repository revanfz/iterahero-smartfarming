import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import { prisma } from "../config/prisma";
import {
  createAutomation,
  deleteAutomation,
  onOffAutomation,
} from "../utils/agenda";

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
    const { id_user } = request.auth.credentials as {
      id_user: number;
    };
    const id_aktuator = parseInt(request.query.id);
    const id_automation = parseInt(request.query.id_automation);
    const type = request.query.type;
    
    if (type) {
      if (type === "bySchedule") {
        const where = id_automation !== 0 ? { id: id_automation } : {};
        const data = await prisma.automationSchedule[id_automation !== 0 ? 'findFirst' : 'findMany']({
          where,
          include: {
            aktuator: {
              include: {
                greenhouse: {
                  where: {
                    user: {
                      every: {
                        id: id_user
                      }
                    }
                  }
                }
              }
            },
          },
        });

        return h.response({
          status: "success",
          data,
        });
      } else if (type === "bySensor") {
        const data = await prisma.automationSensor.findUnique({
          where: {
            id: id_automation,
          },
          include: {
            sensor: true,
            aktuator: true,
          },
        });
        return h.response({
          status: "success",
          data,
        });
      }
    }

    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID aktuator invalid");
    }

    const bySensor = await prisma.automationSensor.findMany({
      where: {
        aktuatorId: id_aktuator,
      },
      include: {
        aktuator: true,
        sensor: true,
      },
    });

    const bySchedule = await prisma.automationSchedule.findUnique({
      where: {
        aktuatorId: id_aktuator,
      },
      include: {
        aktuator: true,
      },
    });

    return h
      .response({
        status: "success",
        data: [...bySensor, bySchedule].filter((item) => item !== null),
      })
      .code(200);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
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
      const isExist = await prisma.automationSensor.count({
        where: {
          aktuatorId: id_aktuator,
          sensorId: id_sensor,
        },
      });

      if (isExist) {
        return Boom.badRequest("Sudah ada automasi yang memakai sensor ini");
      }

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

      await prisma.aktuator.update({
        where: {
          id: id_aktuator
        },
        data: {
          automation: true
        }
      })

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
    // await prisma.$disconnect();
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

    const dataSchedule = await prisma.automationSchedule.findUnique({
      where: {
        aktuatorId: target.id,
      },
    });

    const dataSensor = await prisma.automationSensor.count({
      where: {
        aktuatorId: id_aktuator,
      },
    });

    if (dataSchedule) {
      await onOffAutomation(dataSchedule.aktuatorId, dataSchedule.isActive);
      await prisma.automationSchedule.update({
        where: {
          aktuatorId: id_aktuator,
        },
        data: {
          isActive: !target.automation,
        },
      });
    }
    if (dataSensor) {
      await prisma.automationSensor.updateMany({
        where: {
          aktuatorId: id_aktuator,
        },
        data: {
          isActive: !target.automation,
        },
      });
    }

    if (!dataSchedule && !dataSensor) {
      await prisma.aktuator.update({
        where: {
          id: id_aktuator
        },
        data: {
          automation: false
        }
      })
      return Boom.notFound(`Tidak ada automasi pada ${target.name}`);
    }

    await prisma.aktuator.update({
      where: {
        id: target.id,
      },
      data: {
        automation: !target.automation,
      },
    });

    return h.response({
      status: "success",
      message: `Automasi ${target.name} berhasil di-${
        target.automation ? "matikan" : "aktifkan"
      }`,
    });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_automation = parseInt(request.query.id);
    // const { id_aktuator } = request.payload as { id_aktuator: number }
    const { type } = request.query;
    let target;

    if (isNaN(id_automation)) {
      return Boom.badRequest("ID aktuator tidak valid");
    }

    if (type === "bySensor") {
      const id_sensor = parseInt(request.query.id_sensor);
      if (isNaN(id_sensor)) {
        return Boom.badRequest("ID sensor tidak valid");
      }
      target = await prisma.automationSensor.findFirst({
        where: {
          id: id_automation
        }
      })
      const deletedSensor = await prisma.automationSensor.deleteMany({
        where: {
          id: id_automation,
        },
      });
    } else if (type === "bySchedule") {
      target = await prisma.automationSchedule.findFirst({
        where: {
          id: id_automation
        }
      })
      const deletedSchedule = await prisma.automationSchedule.delete({
        where: {
          id: id_automation,
        },
      });
      await deleteAutomation(id_automation);
    } else {
      return Boom.badRequest("Tipe automasi tidak valid")
    }

    const jumlahAutomasiSensor = await prisma.automationSensor.count({
      where: {
        aktuatorId: target?.aktuatorId
      }
    })

    const jumlahAutomasiJadwal = await prisma.automationSchedule.count({
      where: {
        aktuatorId: target?.aktuatorId
      }
    })

    if (jumlahAutomasiJadwal + jumlahAutomasiSensor === 0) {
      await prisma.aktuator.update({
        where: {
          id: target?.aktuatorId
        },
        data: {
          automation: false
        }
      })
    }
    
    return h
    .response({
      status: "success",
      message: `Automasi ${type === 'bySensor' ? 'sensor' : 'jadwal' } berhasil dihapus`,
    })
    .code(201);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
    // await prisma.$disconnect();
  }
};

export const putHandler = async (request: Request, h: ResponseToolkit) => {
  try {
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

    const id_automation = parseInt(request.query.id)
    const { type } = request.query;

    if (isNaN(id_automation)) {
      return Boom.badRequest("ID automation tidak valid")
    }

    if (type === 'bySensor') {
      await prisma.automationSensor.update({
        where: {
          id: id_automation
        },
        data: {
          sensorId: id_sensor,
          action,
          condition,
          constant,
        },
      });

      return h
        .response({
          status: "success",
          message: `Automasi berdasarkan sensor berhasil diperbarui`,
        }).code(201)
    } else if (type === 'bySchedule') {
      const data = await prisma.automationSchedule.update({
        where: {
          id: id_automation
        },
        data: {
          interval,
          duration,
          iterasi,
          startTime,
        }
      })
      await deleteAutomation(id_aktuator)
      await createAutomation(data)

      return h.response({
        status: 'success',
        message: 'Automasi berdasarkan jadwal berhasil diperbarui'
      }).code(201)
    }
  }
  catch (e) {
    console.log(e)
    if (e instanceof Error) {
      return Boom.internal(e.message)
    }
  }
  finally {
    // await prisma.$disconnect()
  }
}