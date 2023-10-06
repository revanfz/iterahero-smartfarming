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
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulePeracikan = exports.deletePeracikan = exports.onOffPeracikan = exports.initPeracikan = void 0;
const schedule = __importStar(require("node-schedule"));
const mqtt_1 = require("../config/mqtt");
const prisma_1 = require("../config/prisma");
const initPeracikan = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.prisma.penjadwalan.findMany({
        orderBy: {
            id: "asc",
        },
    });
    data
        .filter((item) => item.isActive)
        .forEach((item) => (0, exports.schedulePeracikan)(item.id, item.waktu, item.hari, item.resepId));
    prisma_1.prisma.$disconnect();
});
exports.initPeracikan = initPeracikan;
const onOffPeracikan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.prisma.penjadwalan.findUnique({
        where: {
            id,
        },
    });
    if (data) {
        if (data.isActive) {
            schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
        }
        else {
            (0, exports.schedulePeracikan)(data.id, data.waktu, data.hari, data.resepId);
        }
    }
});
exports.onOffPeracikan = onOffPeracikan;
const deletePeracikan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    schedule.scheduledJobs[`iterahero2023-peracikan-${id}`].cancel();
});
exports.deletePeracikan = deletePeracikan;
const schedulePeracikan = (id, jam, hari, resep) => __awaiter(void 0, void 0, void 0, function* () {
    const waktu = jam.split(":");
    const hour = parseInt(waktu[0]);
    const minute = parseInt(waktu[1]);
    const rule = new schedule.RecurrenceRule();
    rule.hour = hour;
    rule.minute = minute;
    rule.dayOfWeek = hari;
    const komposisi = yield prisma_1.prisma.resep.findUnique({
        where: {
            id: resep,
        },
    });
    if (komposisi) {
        schedule.scheduleJob(`iterahero2023-peracikan-${id}`, rule, function (resep) {
            console.log(`Schedule ${hour}:${waktu}`);
            (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
                peracikan: true,
                komposisi: resep,
            }));
        }.bind(null, komposisi));
    }
});
exports.schedulePeracikan = schedulePeracikan;
