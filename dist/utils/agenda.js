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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agendaInit = exports.deletePenjadwalan = exports.onOffPenjadwalan = exports.reinitializeSchedule = exports.createJobs = exports.agenda = void 0;
require("dotenv/config");
const agenda_1 = require("@hokify/agenda");
const prisma_1 = require("../config/prisma");
const mqtt_1 = require("../config/mqtt");
const Sensor_1 = __importDefault(require("../models/Sensor"));
const SensorLog_1 = __importDefault(require("../models/SensorLog"));
const convertToCronExpression = (waktu, hari) => {
    const [jam, menit] = waktu.split(":");
    const cronDaysOfWeek = hari.sort().join(",");
    return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};
exports.agenda = new agenda_1.Agenda({
    db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});
const createJobs = (target) => __awaiter(void 0, void 0, void 0, function* () {
    const schedule = exports.agenda.create("penjadwalan-peracikan", {
        id_penjadwalan: target.id,
        id_resep: target.resepId,
        id_tandon: target.tandonId,
        id_greenhouse: target.greenhouseId,
        durasi: target.durasi
    });
    const cron_exp = convertToCronExpression(target.waktu, target.hari);
    schedule.repeatEvery(cron_exp, {
        timezone: "Asia/Jakarta",
    });
    yield schedule.save();
});
exports.createJobs = createJobs;
const reinitializeSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ name: { $in: ["penjadwalan-peracikan"] } });
    const penjadwalan = yield prisma_1.prisma.penjadwalan.findMany();
    penjadwalan
        .filter((item) => item.isActive)
        .forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, exports.createJobs)(item);
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
});
exports.onOffPenjadwalan = onOffPenjadwalan;
const deletePenjadwalan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ "data.id_penjadwalan": id });
});
exports.deletePenjadwalan = deletePenjadwalan;
const agendaInit = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.agenda.define("logging-sensor", (job, done) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield Sensor_1.default.find();
        data.forEach((item) => __awaiter(void 0, void 0, void 0, function* () { return yield SensorLog_1.default.create({ id_sensor: item.id, nama: item.nama, nilai: item.nilai }); }));
        done();
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
        (0, mqtt_1.publishData)("iterahero2023/penjadwalan-distribusi", JSON.stringify({
            komposisi: resep,
            lamaPenyiraman: durasi,
            konstanta: rasio,
            aktuator,
        }));
        done();
    }));
    yield exports.agenda.start();
    console.log("Agenda started");
    yield exports.agenda.every("1 day", "logging-sensor");
    (0, exports.reinitializeSchedule)().then(() => console.log("Inisialisasi Penjadwalan Selesai"));
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
