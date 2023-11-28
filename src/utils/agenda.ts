import "dotenv/config";
import { Agenda, Job } from "@hokify/agenda";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";
import { Penjadwalan } from "@prisma/client";
import Sensor from "../models/Sensor";
import SensorLog from "../models/SensorLog";

const convertToCronExpression = (waktu: string, hari: number[]) => {
  const [jam, menit] = waktu.split(":");
  const cronDaysOfWeek = hari.sort().join(",");

  return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};

export const agenda = new Agenda({
  db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});

export const createJobs = async (target: Penjadwalan) => {
  const schedule = agenda.create(
    "penjadwalan-peracikan",
    { 
      id_penjadwalan: target.id,
      id_resep: target.resepId,
      id_tandon: target.tandonId,
      id_greenhouse: target.greenhouseId,
      durasi: target.durasi
    }
  );
  const cron_exp = convertToCronExpression(target.waktu, target.hari);
  schedule.repeatEvery(cron_exp, {
    timezone: "Asia/Jakarta",
  });
  await schedule.save()
}

export const reinitializeSchedule = async () => {
  await agenda.cancel({ name: { $in: ["penjadwalan-peracikan"] } });

  const penjadwalan = await prisma.penjadwalan.findMany();

  penjadwalan
    .filter((item) => item.isActive)
    .forEach(async (item) => {
      await createJobs(item)
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
  agenda.define("logging-sensor", async (job: Job, done) => {
    const data = await Sensor.find();
    data.forEach(async item => await SensorLog.create({ id_sensor: item.id, nama: item.nama, nilai: item.nilai }))
    done();
  })

  agenda.define("penjadwalan-peracikan", async (job: Job, done) => {
    const { id_penjadwalan, id_resep, id_tandon, id_greenhouse, durasi } = job.attrs.data as {
      id_penjadwalan: number;
      id_resep: number;
      id_tandon: number;
      id_greenhouse: number;
      durasi: number;
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
    // publishData(
    //   "iterahero2023/penjadwalan-peracikan",
    //   JSON.stringify({
    //     komposisi: resep,
    //     lamaPenyiraman: durasi,
    //     konstanta: rasio,
    //     aktuator,
    //   })
      publishData(
        "iterahero2023/penjadwalan-distribusi",
        JSON.stringify({
          komposisi: resep,
          lamaPenyiraman: durasi,
          konstanta: rasio,
          aktuator,
        })
    );
    done();
  });

  await agenda.start();
  console.log("Agenda started");
  await agenda.every("1 day", "logging-sensor")
  reinitializeSchedule().then(() =>
    console.log("Inisialisasi Penjadwalan Selesai")
  );
};

async function graceful() {
  await agenda.cancel({ name: { $in: ["penjadwalan-peracikan", "test"] } });
  console.log("Stopping agenda");
  await agenda.stop();
  process.exit(0);
}

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);
