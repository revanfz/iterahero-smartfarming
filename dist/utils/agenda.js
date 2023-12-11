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
exports.agendaInit = exports.deleteAutomation = exports.deletePenjadwalan = exports.onOffAutomation = exports.onOffPenjadwalan = exports.reinitializeSchedule = exports.createAutomation = exports.createPenjadwalan = exports.agenda = void 0;
require("dotenv/config");
const agenda_1 = require("@hokify/agenda");
const prisma_1 = require("../config/prisma");
const mqtt_1 = require("../config/mqtt");
const Sensor_1 = __importDefault(require("../models/Sensor"));
const SensorLog_1 = __importDefault(require("../models/SensorLog"));
const AktuatorLog_1 = __importDefault(require("../models/AktuatorLog"));
exports.agenda = new agenda_1.Agenda({
    db: { address: process.env.MONGODB_URL || "", collection: "penjadwalan" },
});
const convertToCronExpression = (waktu, hari) => {
    const [jam, menit] = waktu.split(":");
    const cronDaysOfWeek = hari.sort().join(",");
    return `${parseInt(menit)} ${parseInt(jam)} * * ${cronDaysOfWeek}`;
};
const createPenjadwalan = (target) => __awaiter(void 0, void 0, void 0, function* () {
    const schedule = exports.agenda.create("penjadwalan-peracikan", {
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
    yield schedule.save();
});
exports.createPenjadwalan = createPenjadwalan;
const createAutomation = (target) => __awaiter(void 0, void 0, void 0, function* () {
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
    const scheduleAutomation = exports.agenda.create("automation", {
        id_aktuator: target.aktuatorId,
        durasi: target.duration,
    });
    scheduleAutomation.repeatEvery(`${minute} ${jamAutomasi} * * *`, {
        timezone: "Asia/Jakarta",
    });
    yield scheduleAutomation.save();
    // Automasi mati
    const jamAutomasiOff = jamOff.sort().join(",");
    const scheduleOff = exports.agenda.create("automation-off", {
        id_aktuator: target.aktuatorId,
    });
    scheduleOff.repeatEvery(`${menitOff % 60} ${jamAutomasiOff} * * *`, {
        timezone: "Asia/Jakarta",
    });
    yield scheduleOff.save();
});
exports.createAutomation = createAutomation;
const reinitializeSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const penjadwalan = yield prisma_1.prisma.penjadwalan.findMany({
        where: {
            isActive: true,
        },
    });
    const automation = yield prisma_1.prisma.automationSchedule.findMany({
        where: {
            isActive: true,
        },
    });
    penjadwalan.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, exports.createPenjadwalan)(item);
    }));
    automation.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, exports.createAutomation)(item);
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
const onOffAutomation = (id, currentStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield exports.agenda.jobs({
        "data.id_aktuator": id,
    });
    data.forEach((job) => {
        if (currentStatus)
            job.disable();
        else
            job.enable();
    });
});
exports.onOffAutomation = onOffAutomation;
const deletePenjadwalan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ "data.id_penjadwalan": id });
});
exports.deletePenjadwalan = deletePenjadwalan;
const deleteAutomation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.agenda.cancel({ "data.id_automation": id });
});
exports.deleteAutomation = deleteAutomation;
const agendaInit = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.agenda.define("logging-sensor", (job) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prisma_1.prisma.sensor.findMany();
        data
            .filter((item) => item.status)
            .forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const target = yield Sensor_1.default.findOne({ id_sensor: item.id }).sort({
                createdAt: -1,
            });
            if (target) {
                yield SensorLog_1.default.create({
                    id_sensor: target.id_sensor,
                    nama: target.nama,
                    nilai: target.nilai,
                    createdAt: new Date(),
                });
            }
        }));
    }));
    exports.agenda.define("check-sensor", (job) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prisma_1.prisma.sensor.findMany();
        data.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const now = new Date();
            const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
            if (item.updated_at && item.updated_at < oneHourAgo && item.status) {
                yield prisma_1.prisma.sensor.update({
                    where: {
                        id: item.id,
                    },
                    data: {
                        status: !item.status,
                    },
                });
            }
        }));
    }));
    exports.agenda.define("automation", (job) => __awaiter(void 0, void 0, void 0, function* () {
        const { id_automation, id_aktuator, durasi } = job.attrs.data;
        const data = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
        });
        yield prisma_1.prisma.aktuator.update({
            where: {
                id: id_aktuator,
            },
            data: {
                status: true,
            },
        });
        yield AktuatorLog_1.default.create({
            id_aktuator,
            message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} menyala`,
            status: true
        });
        console.log(data === null || data === void 0 ? void 0 : data.name, id_aktuator);
        (0, mqtt_1.publishData)("iterahero2023/kontrol", JSON.stringify({
            pin: data === null || data === void 0 ? void 0 : data.GPIO,
            state: true,
            durasi,
        }));
    }));
    exports.agenda.define("automation-off", (job) => __awaiter(void 0, void 0, void 0, function* () {
        const { id_automation, id_aktuator } = job.attrs.data;
        const data = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
        });
        yield prisma_1.prisma.aktuator.update({
            where: {
                id: id_aktuator,
            },
            data: {
                status: false,
            },
        });
        yield AktuatorLog_1.default.create({
            id_aktuator,
            message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} dimatikan`,
            status: false
        });
    }));
    exports.agenda.define("penjadwalan-peracikan", (job) => __awaiter(void 0, void 0, void 0, function* () {
        const { id_penjadwalan, id_resep, id_tandon, id_greenhouse, durasi, createdBy, } = job.attrs.data;
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
        yield prisma_1.prisma.notification.create({
            data: {
                message: `Penjadwalan ${resep === null || resep === void 0 ? void 0 : resep.nama} telah dimulai`,
                read: false,
                userId: createdBy,
            },
        });
        (0, mqtt_1.publishData)("iterahero2023/penjadwalan-peracikan", JSON.stringify({
            komposisi: resep,
            lamaPenyiraman: durasi,
            konstanta: rasio,
            aktuator,
        }));
    }));
    exports.agenda
        .start()
        .then(() => console.log("Agenda Started"))
        .catch((err) => console.error(err));
    exports.agenda.every("10 minutes", "check-sensor");
    exports.agenda.every("1 hour", "logging-sensor");
    (0, exports.reinitializeSchedule)().then(() => console.log("Inisialisasi Penjadwalan Selesai"));
});
exports.agendaInit = agendaInit;
function graceful() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.agenda.cancel({
            name: {
                $in: ["penjadwalan-peracikan", "test", "logging-sensor", "check-sensor"],
            },
        });
        console.log("Stopping agenda");
        yield exports.agenda.stop();
        process.exit(0);
    });
}
process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);
