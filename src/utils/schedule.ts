import * as schedule from "node-schedule";
import { publishData } from "../config/mqtt";
import { prisma } from "../config/prisma";

export const initPeracikan = async () => {
  schedule
    .gracefulShutdown()
    .then(async () => {
      const data = await prisma.penjadwalan.findMany({
        orderBy: {
          id: "asc",
        },
      });
      data
        .filter((item) => item.isActive === true)
        .forEach(async (item) => {
          await schedulePeracikan(item.id, item.waktu, item.hari, item.resepId, item.durasi, item.greenhouseId);
        });
    })
    .catch((err) => console.error(err))
    .finally(async () => await prisma.$disconnect());
};

export const onOffPeracikan = async (id: number) => {
  const data = await prisma.penjadwalan.findUnique({
    where: {
      id,
    },
  });
  if (data) {
    if (data.isActive) {
      schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
    } else {
      await schedulePeracikan(data.id, data.waktu, data.hari, data.resepId, data.durasi, data.greenhouseId);
    }
  }
};

export const deletePeracikan = (id: number) => {
  schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
};

export const schedulePeracikan = async (
  id: number,
  jam: string,
  hari: number[],
  resep: number,
  durasi: number,
  id_greenhouse: number
) => {
  try {
    const waktu = jam.split(":");
    const hour = parseInt(waktu[0]);
    const minute = parseInt(waktu[1]);

    const rule = new schedule.RecurrenceRule();
    rule.hour = hour;
    rule.minute = minute;
    rule.dayOfWeek = hari;

    let komposisi = await prisma.resep.findUnique({
      where: {
        id: resep,
      },
    });
    let rasio = await prisma.tandon.findUnique({
      where: {
        id: 1
      },
      select: {
        rasioA: true,
        rasioB: true,
        rasioAir: true,
        ppm: true
      }
    })
    let aktuator = await prisma.aktuator.findMany({
      where:{
        greenhouseId: id_greenhouse,
      }
    })
    if (komposisi && rasio && aktuator) {
      console.log("Peracikan")
      schedule.scheduleJob(
        `iterahero2023-peracikan-${id}`,
        rule,
        function (resep: object, durasi: number, rasio: object, aktuator: object) {
          publishData(
            "iterahero2023/penjadwalan-peracikan",
            JSON.stringify({
              komposisi: resep,
              lamaPenyiraman: durasi,
              konstanta: rasio,
              aktuator
            })
          );
        }.bind(null, komposisi, durasi, rasio, aktuator)
      );
    }
  } catch (e) {
    console.log(e);
  }
  finally {
    await prisma.$disconnect()
  }
};
