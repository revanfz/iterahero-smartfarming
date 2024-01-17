import "dotenv/config";
import { Agenda, Job } from "@hokify/agenda";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";
import { AutomationSchedule, Penjadwalan } from "@prisma/client";
import Sensor from "../models/Sensor";
import SensorLog from "../models/SensorLog";
import AktuatorLog from "../models/AktuatorLog";

export const agenda = new Agenda({
  db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});

const convertToCronExpression = (waktu: string, hari: number[]) => {
  const [jam, menit] = waktu.split(":");
  const cronDaysOfWeek = hari.sort().join(",");

  return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};

export const createPenjadwalan = async (target: Penjadwalan) => {
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
    skipImmediate: true
  });
  await schedule.save();
};

export const createAutomation = async (target: AutomationSchedule) => {
  const [hour, minute] = target.startTime.split(":");
  const menitOff = parseInt(minute) + target.duration;
  let jamJadwal = [];
  let jamOff = [];

  for (let i = 0; i < target.iterasi; i++) {
    let jam = parseInt(hour);
    let menit = parseInt(minute);
    jam = jam + i * target.interval;
    jamOff.push(jam + Math.floor(menit / 60));
    jamJadwal.push(jam);
    if (jam >= 24) {
      throw "Jamnya tidak valid";
    }
  }
  // Automasi menyala
  const jamAutomasi = jamJadwal.sort().join(",");
  const scheduleAutomation = agenda.create("automation", {
    id_aktuator: target.aktuatorId,
    durasi: target.duration,
  });
  scheduleAutomation.repeatEvery(`${minute} ${jamAutomasi} * * *`, {
    timezone: "Asia/Jakarta",
    skipImmediate: true
  });
  await scheduleAutomation.save();

  // Automasi mati
  const jamAutomasiOff = jamOff.sort().join(",");
  const scheduleOff = agenda.create("automation-off", {
    id_aktuator: target.aktuatorId,
  });
  scheduleOff.repeatEvery(`${menitOff % 60} ${jamAutomasiOff} * * *`, {
    timezone: "Asia/Jakarta",
  });
  await scheduleOff.save();
};

export const reinitializeSchedule = async () => {
  const penjadwalan = await prisma.penjadwalan.findMany({
    where: {
      isActive: true,
    },
  });
  const automation = await prisma.automationSchedule.findMany({
    where: {
      isActive: true,
    },
  });

  penjadwalan.forEach(async (item) => {
    await createPenjadwalan(item);
  });

  automation.forEach(async (item) => {
    await createAutomation(item);
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

export const onOffAutomation = async (id: number, currentStatus: boolean) => {
  const data = await agenda.jobs({
    "data.id_aktuator": id,
  });
  data.forEach((job) => {
    if (currentStatus) job.disable();
    else job.enable();
  });
};

export const deletePenjadwalan = async (id: number) => {
  await agenda.cancel({ "data.id_penjadwalan": id });
};

export const deleteAutomation = async (id: number) => {
  await agenda.cancel({ "data.id_automation": id });
};

export const agendaInit = async () => {
  agenda.define("logging-sensor", async (job: Job) => {
    const data = await prisma.sensor.findMany({
      include: {
        microcontroller: true
      }
    });
    data
      .filter((item) => item.microcontroller?.status)
      .forEach(async (item) => {
        const target = await Sensor.findOne({ id_sensor: item.id }).sort({
          createdAt: -1,
        });
        if (target) {
          await SensorLog.create({
            id_sensor: target.id_sensor,
            nama: target.nama,
            nilai: target.nilai,
            microcontrollerId: target.microcontrollerId,
            createdAt: new Date(),
          });
        }
      });
  });

  agenda.define("check-microcontroller", async (job: Job) => {
    const data = await prisma.microcontroller.findMany();
    data.forEach(async (item) => {
      const now = new Date();
      const threeMinsAgo = new Date(now.getTime() - 3 * 60 * 1000);
      if (item.updated_at && item.updated_at < threeMinsAgo && item.status) {
        await prisma.microcontroller.update({
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

  agenda.define("automation", async (job: Job) => {
    const { id_automation, id_aktuator, durasi } = job.attrs.data as {
      id_automation: number;
      id_aktuator: number;
      durasi: number;
    };
    const data = await prisma.aktuator.findUnique({
      where: {
        id: id_aktuator,
      },
    });
    await prisma.aktuator.update({
      where: {
        id: id_aktuator,
      },
      data: {
        isActive: true,
      },
    });
    await AktuatorLog.create({
      id_aktuator,
      message: `Automasi - ${data?.name} menyala`,
      status: true
    });
    console.log(data?.name, id_aktuator);
    publishData(
      "iterahero2023/kontrol",
      JSON.stringify({
        pin: data?.GPIO,
        state: true,
        durasi,
      }),
      data?.microcontrollerId ?? 0
    );
  });

  agenda.define("automation-off", async (job: Job) => {
    const { id_automation, id_aktuator } = job.attrs.data as {
      id_automation: number;
      id_aktuator: number;
      durasi: number;
    };
    const data = await prisma.aktuator.findUnique({
      where: {
        id: id_aktuator,
      },
    });
    await prisma.aktuator.update({
      where: {
        id: id_aktuator,
      },
      data: {
        isActive: false,
      },
    });
    await AktuatorLog.create({
      id_aktuator,
      message: `Automasi - ${data?.name} dimatikan`,
      status: false
    });
  });

  agenda.define("penjadwalan-peracikan", async (job: Job) => {
    const {
      id_penjadwalan,
      id_resep,
      id_tandon,
      id_greenhouse,
      durasi,
      createdBy,
    } = job.attrs.data as {
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
      },
    });
    publishData(
      "iterahero2023/penjadwalan-peracikan",
      JSON.stringify({
        komposisi: resep,
        lamaPenyiraman: durasi,
        konstanta: rasio,
        aktuator,
      }),
      1
    );
  });

  agenda
    .start()
    .then(() => console.log("Agenda Started"))
    .catch((err) => console.error(err));

  agenda.every("3 minutes", "check-microcontroller");
  agenda.every("1 hour", "logging-sensor");
  reinitializeSchedule().then(() =>
    console.log("Inisialisasi Penjadwalan Selesai")
  );
};

async function graceful() {
  await agenda.cancel({
    name: {
      $in: ["penjadwalan-peracikan", "test", "logging-sensor", "check-microcontroller"],
    },
  });
  console.log("Stopping agenda");
  await agenda.stop();
  process.exit(0);
}

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);
