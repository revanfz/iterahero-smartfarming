"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.schedulePeracikan = exports.deletePeracikan = exports.onOffPeracikan = exports.initPeracikan = void 0;
const schedule = __importStar(require("node-schedule"));
const mqtt_1 = require("../config/mqtt");
const prisma_1 = __importDefault(require("../config/prisma"));
const initPeracikan = () => __awaiter(void 0, void 0, void 0, function* () {
    schedule
        .gracefulShutdown()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield prisma_1.default.penjadwalan.findMany({
            orderBy: {
                id: "asc",
            },
        });
        data
            .filter((item) => item.isActive === true)
            .forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, exports.schedulePeracikan)(item.id, item.waktu, item.hari, item.resepId, item.tandonId);
        }));
    }))
        .catch((err) => console.error(err));
});
exports.initPeracikan = initPeracikan;
const onOffPeracikan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.penjadwalan.findUnique({
        where: {
            id,
        },
    });
    if (data) {
        if (data.isActive) {
            schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
        }
        else {
            yield (0, exports.schedulePeracikan)(data.id, data.waktu, data.hari, data.resepId, data.tandonId);
        }
    }
});
exports.onOffPeracikan = onOffPeracikan;
const deletePeracikan = (id) => {
    schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
};
exports.deletePeracikan = deletePeracikan;
const schedulePeracikan = (id, jam, hari, resep, id_tandon) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const waktu = jam.split(":");
        const hour = parseInt(waktu[0]);
        const minute = parseInt(waktu[1]);
        const rule = new schedule.RecurrenceRule();
        rule.hour = hour;
        rule.minute = minute;
        rule.dayOfWeek = hari;
        let komposisi = yield prisma_1.default.resep.findUnique({
            where: {
                id: resep,
            },
        });
        let rasio = yield prisma_1.default.tandon.findUnique({
            where: {
                id: 1
            },
            select: {
                rasioA: true,
                rasioB: true,
                rasioAir: true,
                ppm: true
            }
        });
        let aktuator = yield prisma_1.default.aktuator.findFirst({
            where: {
                tandonId: id_tandon,
            }
        });
        if (komposisi && rasio && aktuator) {
            schedule.scheduleJob(`iterahero2023-peracikan-${id}`, rule, function (resep, rasio, aktuator) {
                var _a;
                (0, mqtt_1.publishData)("iterahero2023/penjadwalan-peracikan", JSON.stringify({
                    komposisi: resep,
                    konstanta: rasio,
                    aktuator
                }), (_a = aktuator.microcontrollerId) !== null && _a !== void 0 ? _a : 0);
            }.bind(null, komposisi, rasio, aktuator));
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.schedulePeracikan = schedulePeracikan;
