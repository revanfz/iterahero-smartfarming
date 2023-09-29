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
exports.patchHandler = exports.deleteHandler = exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const schedule_1 = require("../utils/schedule");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma_1.prisma.penjadwalan.findMany({
            include: {
                resep: true
            }
        });
        if (!data) {
            return boom_1.default.notFound("Tidak ada data penjadwalan");
        }
        return h.response({
            status: 'success',
            data
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resep, id_tandon, waktu, iterasi, interval } = request.payload;
        const _splitTime = waktu.split(":");
        const jam = parseInt(_splitTime[0]);
        const menit = parseInt(_splitTime[1]);
        const isAuth = request.auth.credentials;
        if (isAuth) {
            const input = request.payload;
            const resepTarget = yield prisma_1.prisma.resep.findFirst({
                where: {
                    nama: resep
                }
            });
            if (!resepTarget) {
                return boom_1.default.notFound("Tidak ada resep yang sesuai");
            }
            const arrJam = [jam];
            let menit = resepTarget.interval % 60;
            for (let i = 0; i < iterasi - 1; i++) {
                let intervalToHour = Math.floor(resepTarget.interval / 60);
                arrJam.push(jam + intervalToHour * (i + 1));
            }
            const isJadwalExist = yield prisma_1.prisma.penjadwalan.findFirst({
                where: {
                    waktu: {
                        in: arrJam
                    }
                }
            });
            if (isJadwalExist) {
                return boom_1.default.badRequest(`Sudah ada peracikan di jam ${isJadwalExist.waktu}`);
            }
            arrJam.forEach((item, index) => __awaiter(void 0, void 0, void 0, function* () {
                yield prisma_1.prisma.penjadwalan.create({
                    data: {
                        resepId: resepTarget.id,
                        waktu: item,
                        tandonId: id_tandon,
                        isActive: true
                    }
                });
            }));
            (0, schedule_1.schedulePeracikan)(isAuth.toString(), resep, arrJam, menit, iterasi, interval);
            return h.response({
                status: 'success',
                message: 'Penjadwalan telah dibuat'
            }).code(201);
        }
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.postHandler = postHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.query;
        const data = yield prisma_1.prisma.penjadwalan.delete({
            where: {
                id
            }
        });
        if (!data) {
            return boom_1.default.notFound("Tidak ada penjadwalan terkait");
        }
        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil dihapus'
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.deleteHandler = deleteHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.query;
        const targetWaktu = yield prisma_1.prisma.penjadwalan.update({
            where: { id },
            data: {
                isActive: false
            }
        });
        if (!targetWaktu) {
            return boom_1.default.notFound("Tidak ada penjadwalan terkait.");
        }
        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil di-nonaktifkan'
        }).code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.patchHandler = patchHandler;
