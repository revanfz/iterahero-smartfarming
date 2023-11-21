"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agendaInit = exports.deletePenjadwalan = exports.onOffPenjadwalan = exports.reinitializeSchedule = exports.agenda = void 0;
require("dotenv/config");
const agenda_1 = require("@hokify/agenda");
const prisma_1 = require("../config/prisma");
const mqtt_1 = require("../config/mqtt");
const convertToCronExpression = (waktu, hari) => {
    const [jam, menit] = waktu.split(":");
    const cronDaysOfWeek = hari.sort().join(",");
    return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};
exports.agenda = new agenda_1.Agenda({
    db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});
const reinitializeSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ name: { $in: ["penjadwalan-peracikan", "test"] } });
    const penjadwalan = yield prisma_1.prisma.penjadwalan.findMany();
    penjadwalan
        .filter((item) => item.isActive)
        .forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        const schedule = exports.agenda.create("penjadwalan-peracikan", {
            id_penjadwalan: item.id,
            id_resep: item.resepId,
            id_tandon: item.tandonId,
            id_greenhouse: item.greenhouseId,
            durasi: item.durasi
        });
        const cron_exp = convertToCronExpression(item.waktu, item.hari);
        schedule.repeatEvery(cron_exp, {
            timezone: "Asia/Jakarta",
        });
        schedule.save();
    }));
});
exports.reinitializeSchedule = reinitializeSchedule;
const onOffPenjadwalan = (id, currentStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield exports.agenda.jobs({
        "data.id_penjadwalan": id,
    });
    data.forEach((job) => {
        if (currentStatus)
            job.disable();
        else
            job.enable();
    });
    console.log(data);
});
exports.onOffPenjadwalan = onOffPenjadwalan;
const deletePenjadwalan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ "data.id_penjadwalan": id });
});
exports.deletePenjadwalan = deletePenjadwalan;
const agendaInit = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.agenda.define("test", (jobs) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("test");
    }));
    exports.agenda.define("penjadwalan-peracikan", (job, done) => __awaiter(void 0, void 0, void 0, function* () {
        const { id_penjadwalan, id_resep, id_tandon, id_greenhouse, durasi } = job.attrs.data;
        const resep = yield prisma_1.prisma.resep.findUnique({
            where: {
                id: id_resep,
            },
        });
        const rasio = yield prisma_1.prisma.tandon.findUnique({
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
        const aktuator = yield prisma_1.prisma.aktuator.findMany({
            where: {
                greenhouseId: id_greenhouse,
            },
        });
        (0, mqtt_1.publishData)("iterahero2023/penjadwalan-peracikan", JSON.stringify({
            komposisi: resep,
            lamaPenyiraman: durasi,
            konstanta: rasio,
            aktuator,
        }));
        done();
    }));
    yield exports.agenda.start();
    console.log("Agenda started");
    (0, exports.reinitializeSchedule)().then(() => 
    // agenda.every("10 seconds", "test", null, {
    //   timezone: "Asia/Jakarta",
    //   skipImmediate: true,
    // })
    console.log("Inisialisasi Penjadwalan Selesai"));
});
exports.agendaInit = agendaInit;
function graceful() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.agenda.cancel({ name: { $in: ["penjadwalan-peracikan", "test"] } });
        console.log("Stopping agenda");
        yield exports.agenda.stop();
        process.exit(0);
    });
}
process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);
