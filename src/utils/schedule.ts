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
        .filter((item) => item.isActive)
        .forEach(async (item) => {
          await schedulePeracikan(item.id, item.waktu, item.hari, item.resepId, item.durasi);
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
      await schedulePeracikan(data.id, data.waktu, data.hari, data.resepId, data.durasi);
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
  durasi: number
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
      include: {
        greenhouse: {
          select: {
            id: true,
          },
        },
      },
    });
    if (komposisi) {
      console.log(`Peracikan-${komposisi.nama}`)
      schedule.scheduleJob(
        `iterahero2023-peracikan-${id}`,
        rule,
        function (resep: object, durasi: number) {
          publishData(
            "iterahero2023/peracikan",
            JSON.stringify({
              peracikan: true,
              komposisi: resep,
              lamaPenyiraman: durasi
            })
          );
        }.bind(null, komposisi, durasi)
      );
      komposisi = null
    }
  } catch (e) {
    console.log(e);
  }
};
