import * as schedule from "node-schedule";
import { publishData } from "../config/mqtt";
import prisma from "../config/prisma";
import { Aktuator, Resep } from "@prisma/client";

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
          await schedulePeracikan(item.id, item.waktu, item.hari, item.resepId, item.tandonId);
        });
    })
    .catch((err) => console.error(err))
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
      await schedulePeracikan(data.id, data.waktu, data.hari, data.resepId, data.tandonId);
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
  id_tandon: number
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
    let aktuator = await prisma.aktuator.findFirst({
      where: {
        tandonId: id_tandon,
      }
    })
    if (komposisi && rasio && aktuator) {
      schedule.scheduleJob(
        `iterahero2023-peracikan-${id}`,
        rule,
        function (resep: Resep, rasio: object, aktuator: Aktuator) {
          publishData(
            "iterahero2023/penjadwalan-peracikan",
            JSON.stringify({
              komposisi: resep,
              konstanta: rasio,
              aktuator
            }),
            aktuator.microcontrollerId ?? 0
          );
        }.bind(null, komposisi, rasio, aktuator)
      );
    }
  } catch (e) {
    console.log(e);
  }
};
