import "dotenv/config";
import { Agenda, Job } from "@hokify/agenda";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";
import { Penjadwalan } from "@prisma/client";
import Sensor from "../models/Sensor";
import SensorLog from "../models/SensorLog";

export const agenda = new Agenda({
  db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});

const convertToCronExpression = (waktu: string, hari: number[]) => {
  const [jam, menit] = waktu.split(":");
  const cronDaysOfWeek = hari.sort().join(",");

  return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};

export const createJobs = async (target: Penjadwalan) => {
  const schedule = agenda.create("penjadwalan-peracikan", {
    id_penjadwalan: target.id,
    id_resep: target.resepId,
    id_tandon: target.tandonId,
    id_greenhouse: target.greenhouseId,
    createdBy: target.createdBy,
    durasi: target.durasi,
  });
  const cron_exp = convertToCronExpression(target.waktu, target.hari);
  schedule.repeatEvery(cron_exp, {
    timezone: "Asia/Jakarta",
  });
  await schedule.save();
};

export const reinitializeSchedule = async () => {
  const penjadwalan = await prisma.penjadwalan.findMany();

  penjadwalan
    .filter((item) => item.isActive)
    .forEach(async (item) => {
      await createJobs(item);
    });
};

export const onOffPenjadwalan = async (id: number, currentStatus: boolean) => {
  const data = await agenda.jobs({
    "data.id_penjadwalan": id,
  });
  data.forEach((job) => {
    if (currentStatus) job.disable();
    else job.enable();
  });
};

export const deletePenjadwalan = async (id: number) => {
  await agenda.cancel({ "data.id_penjadwalan": id });
};

export const agendaInit = async () => {
  agenda.define("logging-sensor", async (job: Job) => {
    const data = await prisma.sensor.findMany();
    data
      .filter((item) => item.status)
      .forEach(async (item) => {
        const target = await Sensor.findOne({ id_sensor: item.id }).sort({
          createdAt: -1,
        });
        if (target) {
          await SensorLog.create({
            id_sensor: target.id_sensor,
            nama: target.nama,
            nilai: target.nilai,
            createdAt: new Date(),
          });
        }
      });
  });

  agenda.define("check-sensor", async (job: Job) => {
    const data = await prisma.sensor.findMany();
    data.forEach(async (item) => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
      if (item.updated_at && item.updated_at < oneHourAgo && item.status) {
        await prisma.sensor.update({
          where: {
            id: item.id,
          },
          data: {
            status: !item.status,
          },
        });
      }
    });
  });

  agenda.define("penjadwalan-peracikan", async (job: Job) => {
    const { id_penjadwalan, id_resep, id_tandon, id_greenhouse, durasi, createdBy } = job
      .attrs.data as {
      id_penjadwalan: number;
      id_resep: number;
      id_tandon: number;
      id_greenhouse: number;
      durasi: number;
      createdBy: number;
    };
    const resep = await prisma.resep.findUnique({
      where: {
        id: id_resep,
      },
    });
    const rasio = await prisma.tandon.findUnique({
      where: {
        id: id_tandon,
      },
      select: {
        rasioAir: true,
        rasioA: true,
        rasioB: true,
        ppm: true,
      },
    });
    const aktuator = await prisma.aktuator.findMany({
      where: {
        greenhouseId: id_greenhouse,
        tandonId: id_tandon,
      },
    });
    await prisma.notification.create({
      data: {
        message: `Penjadwalan ${resep?.nama} telah dimulai`,
        read: false,
        userId: createdBy,
      }
    })
    publishData(
      "iterahero2023/penjadwalan-peracikan",
      JSON.stringify({
        komposisi: resep,
        lamaPenyiraman: durasi,
        konstanta: rasio,
        aktuator,
      })
    );
  });

  agenda.start().then(() => console.log("Agenda Started")).catch(err => console.error(err));

  agenda.every("10 minutes", "check-sensor");
  agenda.every("1 day", "logging-sensor");
  reinitializeSchedule().then(() =>
    console.log("Inisialisasi Penjadwalan Selesai")
  );
};

async function graceful() {
  await agenda.cancel({
    name: {
      $in: ["penjadwalan-peracikan", "test", "logging-sensor", "check-sensor"],
    },
  });
  console.log("Stopping agenda");
  await agenda.stop();
  process.exit(0);
}

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);
