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
    processEvery: "30 seconds",
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
        createdBy: target.createdBy,
    });
    const cron_exp = convertToCronExpression(target.waktu, target.hari);
    schedule.repeatEvery(cron_exp, {
        timezone: "Asia/Jakarta",
        skipImmediate: true,
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
        skipImmediate: true,
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
    for (const jadwal of penjadwalan) {
        yield (0, exports.createPenjadwalan)(jadwal);
    }
    for (const automasi of automation) {
        yield (0, exports.createAutomation)(automasi);
    }
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
        const data = yield prisma_1.prisma.sensor.findMany({
            include: {
                microcontroller: true,
            },
        });
        data
            .filter((item) => { var _a; return (_a = item.microcontroller) === null || _a === void 0 ? void 0 : _a.status; })
            .forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const target = yield Sensor_1.default.findOne({ id_sensor: item.id }).sort({
                createdAt: -1,
            });
            if (target) {
                yield SensorLog_1.default.create({
                    id_sensor: target.id_sensor,
                    nama: target.nama,
                    nilai: target.nilai,
                    microcontrollerId: target.microcontrollerId,
                    createdAt: new Date(),
                });
                // if target.nilai < item.range_min
            }
        }));
    }));
    exports.agenda.define("automation", (job) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const { id_automation, id_aktuator, durasi } = job.attrs.data;
        const data = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
            include: {
                microcontroller: true,
                greenhouse: true,
                tandon: true,
            },
        });
        (0, mqtt_1.publishData)("iterahero2023/automation", JSON.stringify({
            pin: data === null || data === void 0 ? void 0 : data.GPIO,
            durasi,
            microcontroller: (_a = data === null || data === void 0 ? void 0 : data.microcontroller) === null || _a === void 0 ? void 0 : _a.name,
        }), (_b = data === null || data === void 0 ? void 0 : data.microcontrollerId) !== null && _b !== void 0 ? _b : 0).then(() => __awaiter(void 0, void 0, void 0, function* () {
            var _c, _d, _e, _f, _g;
            yield prisma_1.prisma.aktuator.update({
                where: {
                    id: id_aktuator,
                },
                data: {
                    isActive: true,
                },
            });
            yield prisma_1.prisma.notification.create({
                data: {
                    header: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} menyala`,
                    message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} menyala`,
                    userId: 1,
                    loc: ((_f = (_d = (_c = data === null || data === void 0 ? void 0 : data.greenhouse) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : (_e = data === null || data === void 0 ? void 0 : data.tandon) === null || _e === void 0 ? void 0 : _e.nama) !== null && _f !== void 0 ? _f : "") +
                        ((_g = data === null || data === void 0 ? void 0 : data.tandon) === null || _g === void 0 ? void 0 : _g.location),
                },
            });
            yield AktuatorLog_1.default.create({
                id_aktuator,
                message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} menyala`,
                status: true,
            });
        }));
    }));
    exports.agenda.define("automation-off", (job) => __awaiter(void 0, void 0, void 0, function* () {
        var _h, _j;
        const { id_automation, id_aktuator } = job.attrs.data;
        const data = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
            include: {
                microcontroller: true,
                greenhouse: true,
                tandon: true,
            },
        });
        (0, mqtt_1.publishData)("iterahero2023/automation", JSON.stringify({
            pin: data === null || data === void 0 ? void 0 : data.GPIO,
            microcontroller: (_h = data === null || data === void 0 ? void 0 : data.microcontroller) === null || _h === void 0 ? void 0 : _h.name,
        }), (_j = data === null || data === void 0 ? void 0 : data.microcontrollerId) !== null && _j !== void 0 ? _j : 0).then(() => __awaiter(void 0, void 0, void 0, function* () {
            var _k, _l, _m, _o, _p;
            yield prisma_1.prisma.aktuator.update({
                where: {
                    id: id_aktuator,
                },
                data: {
                    isActive: false,
                },
            });
            yield prisma_1.prisma.notification.create({
                data: {
                    header: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} dimatikan`,
                    message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} dimatikan`,
                    userId: 1,
                    loc: ((_o = (_l = (_k = data === null || data === void 0 ? void 0 : data.greenhouse) === null || _k === void 0 ? void 0 : _k.name) !== null && _l !== void 0 ? _l : (_m = data === null || data === void 0 ? void 0 : data.tandon) === null || _m === void 0 ? void 0 : _m.nama) !== null && _o !== void 0 ? _o : "") +
                        ((_p = data === null || data === void 0 ? void 0 : data.tandon) === null || _p === void 0 ? void 0 : _p.location),
                },
            });
            yield AktuatorLog_1.default.create({
                id_aktuator,
                message: `Automasi - ${data === null || data === void 0 ? void 0 : data.name} dimatikan`,
                status: false,
            });
        }));
    }));
    exports.agenda.define("penjadwalan-peracikan", (job) => __awaiter(void 0, void 0, void 0, function* () {
        var _q;
        const { id_penjadwalan, id_resep, id_tandon, createdBy } = job.attrs
            .data;
        const resep = yield prisma_1.prisma.resep.findUnique({
            where: {
                id: id_resep,
            },
        });
        const tandon = yield prisma_1.prisma.tandon.findUnique({
            where: {
                id: id_tandon,
            },
            select: {
                nama: true,
                location: true,
                rasioAir: true,
                rasioA: true,
                rasioB: true,
                ppm: true,
                microcontroller: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        const aktuator = yield prisma_1.prisma.aktuator.findFirst({
            where: {
                tandonId: id_tandon,
            },
        });
        (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
            komposisi: resep,
            konstanta: tandon,
        }), (_q = aktuator === null || aktuator === void 0 ? void 0 : aktuator.microcontrollerId) !== null && _q !== void 0 ? _q : 0)
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.prisma.notification.create({
                data: {
                    header: `Penjadwalan ${resep === null || resep === void 0 ? void 0 : resep.nama} telah dimulai`,
                    message: `Penjadwalan ${resep === null || resep === void 0 ? void 0 : resep.nama} telah dimulai. PH target: ${resep === null || resep === void 0 ? void 0 : resep.ph_min} - ${resep === null || resep === void 0 ? void 0 : resep.ph_max}, PPM target ${resep === null || resep === void 0 ? void 0 : resep.ppm_min} - ${resep === null || resep === void 0 ? void 0 : resep.ppm_max}`,
                    userId: createdBy,
                    loc: (tandon === null || tandon === void 0 ? void 0 : tandon.nama) + ", " + (tandon === null || tandon === void 0 ? void 0 : tandon.location),
                },
            });
        }))
            .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.prisma.notification.create({
                data: {
                    header: `Penjadwalan ${resep === null || resep === void 0 ? void 0 : resep.nama} gagal terjadwal`,
                    message: `Penjadwalan ${resep === null || resep === void 0 ? void 0 : resep.nama} gagal terjadwal`,
                    userId: createdBy,
                    loc: (tandon === null || tandon === void 0 ? void 0 : tandon.nama) + ", " + (tandon === null || tandon === void 0 ? void 0 : tandon.location),
                },
            });
        }));
    }));
    exports.agenda
        .start()
        .then(() => console.log("Agenda Started"))
        .catch((err) => console.error(err));
    exports.agenda.every("1 hour", "logging-sensor");
    (0, exports.reinitializeSchedule)().then(() => console.log("Inisialisasi Penjadwalan Selesai"));
});
exports.agendaInit = agendaInit;
