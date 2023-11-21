import "dotenv/config";
import { Agenda, Job } from "@hokify/agenda";
import { prisma } from "../config/prisma";
import { publishData } from "../config/mqtt";

const convertToCronExpression = (waktu: string, hari: number[]) => {
  const [jam, menit] = waktu.split(":");
  const cronDaysOfWeek = hari.sort().join(",");

  return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};

export const agenda = new Agenda({
  db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});

export const reinitializeSchedule = async () => {
  await agenda.cancel({ name: { $in: ["penjadwalan-peracikan", "test"] } });

  const penjadwalan = await prisma.penjadwalan.findMany();

  penjadwalan
    .filter((item) => item.isActive)
    .forEach(async (item) => {
      const schedule = agenda.create(
        "penjadwalan-peracikan",
        { 
          id_penjadwalan: item.id,
          id_resep: item.resepId,
          id_tandon: item.tandonId,
          id_greenhouse: item.greenhouseId,
          durasi: item.durasi
        }
      );
      const cron_exp = convertToCronExpression(item.waktu, item.hari);
      schedule.repeatEvery(cron_exp, {
        timezone: "Asia/Jakarta",
      });
      schedule.save()
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
  console.log(data);
};

export const deletePenjadwalan = async (id: number) => {
  await agenda.cancel({ "data.id_penjadwalan": id });
};

export const agendaInit = async () => {
  agenda.define("test", async (jobs: Job) => {
    console.log("test");
  });

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
      },
    });
    publishData(
      "iterahero2023/penjadwalan-peracikan",
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

  reinitializeSchedule().then(() =>
    // agenda.every("10 seconds", "test", null, {
    //   timezone: "Asia/Jakarta",
    //   skipImmediate: true,
    // })
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
