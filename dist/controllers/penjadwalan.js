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
const agenda_1 = require("../utils/agenda");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const size = request.query.size;
    const cursor = request.query.cursor;
    try {
        const total = yield prisma_1.prisma.penjadwalan.count();
        const data = yield prisma_1.prisma.penjadwalan.findMany({
            include: {
                resep: true,
            },
            orderBy: [
                {
                    waktu: "asc",
                },
                {
                    hari: "asc",
                },
            ],
            take: size ? size : 100,
            skip: parseInt(cursor) ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        return h
            .response({
            status: "success",
            data,
            cursor: (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
            totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        })
            .code(200);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const { resep, id_tandon, waktu, hari, durasi, id_greenhouse } = request.payload;
        const resepTarget = yield prisma_1.prisma.resep.findFirst({
            where: {
                id: resep,
            },
        });
        if (!resepTarget) {
            return boom_1.default.notFound("Tidak ada resep yang sesuai");
        }
        const isJadwalExist = yield prisma_1.prisma.penjadwalan.findFirst({
            where: {
                waktu: {
                    in: waktu,
                },
                hari: {
                    hasSome: hari,
                },
                tandonId: {
                    equals: id_tandon,
                },
            },
        });
        if (isJadwalExist) {
            const error = boom_1.default.badRequest(`Sudah ada peracikan di jam ${isJadwalExist.waktu}`);
            error.output.payload.data = {
                status: isJadwalExist.isActive ? "enabled" : "disabled",
                hari,
            };
            return error;
        }
        waktu.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const schedule = yield prisma_1.prisma.penjadwalan.create({
                data: {
                    resepId: resepTarget.id,
                    waktu: item,
                    tandonId: id_tandon,
                    isActive: true,
                    hari,
                    // durasi,
                    createdBy: id_user,
                    // greenhouseId: id_greenhouse
                },
            });
            yield (0, agenda_1.createPenjadwalan)(schedule);
        }));
        return h
            .response({
            status: "success",
            message: "Penjadwalan telah dibuat",
        })
            .code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        yield (0, agenda_1.deletePenjadwalan)(id);
        yield prisma_1.prisma.penjadwalan.delete({
            where: {
                id,
            },
        });
        return h
            .response({
            status: "success",
            message: "Penjadwalan berhasil dihapus",
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.notFound("Tidak ada penjadwalan dengan id tersebut");
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.payload;
        const targetWaktu = yield prisma_1.prisma.penjadwalan.findUnique({
            where: { id },
        });
        if (targetWaktu) {
            yield (0, agenda_1.onOffPenjadwalan)(targetWaktu.id, targetWaktu.isActive);
            yield prisma_1.prisma.penjadwalan.update({
                where: { id },
                data: {
                    isActive: !targetWaktu.isActive,
                },
            });
        }
        else {
            return boom_1.default.notFound("Penjadwalan terpilih tidak ditemukan");
        }
        return h
            .response({
            status: "success",
            message: `Penjadwalan berhasil di-${targetWaktu.isActive ? "nonaktifkan" : "aktifkan"}`,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
