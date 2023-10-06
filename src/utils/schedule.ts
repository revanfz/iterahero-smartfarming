import * as schedule from "node-schedule";
import { publishData } from "../config/mqtt";
import { prisma } from "../config/prisma";

export const initPeracikan = async () => {
  try {
   const data = await prisma.penjadwalan.findMany({
      orderBy: {
        id: "asc",
      },
    });
    data.filter(item => item.isActive === true).forEach(item => {
      schedulePeracikan(item.id, item.waktu, item.hari, item.resepId)
    } 
    );

  }
  catch (e) {
      console.log(e);
  } finally {
    prisma.$disconnect();
  }
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
      schedulePeracikan(data.id, data.waktu, data.hari, data.resepId);
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
  resep: number
) => {
  const waktu = jam.split(":");
  const hour = parseInt(waktu[0]);
  const minute = parseInt(waktu[1]);

  const rule = new schedule.RecurrenceRule();
  rule.hour = hour;
  rule.minute = minute;
  rule.dayOfWeek = hari;

  const komposisi = await prisma.resep.findUnique({
    where: {
      id: resep,
    },
  });
  if (komposisi) {
    schedule.scheduleJob(
      `iterahero2023-peracikan-${id}`,
      rule,
      function (resep: object) {
        console.log(`Schedule ${hour}:${waktu}`);
        publishData(
          "iterahero2023/peracikan",
          JSON.stringify({
            peracikan: true,
            komposisi: resep,
          })
        );
      }.bind(null, komposisi)
    );
  }
};
