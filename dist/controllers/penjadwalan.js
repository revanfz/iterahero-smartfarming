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
        // if (data.length < 1) {
        //     return Boom.notFound("Tidak ada data penjadwalan")
        // }
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
        yield prisma_1.prisma.$disconnect();
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resep, id_tandon, waktu, hari, durasi } = request.payload;
        const resepTarget = yield prisma_1.prisma.resep.findFirst({
            where: {
                nama: resep,
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
            yield prisma_1.prisma.penjadwalan.create({
                data: {
                    resepId: resepTarget.id,
                    waktu: item,
                    tandonId: id_tandon,
                    isActive: true,
                    hari,
                    durasi,
                },
            });
        }));
        yield (0, schedule_1.initPeracikan)();
        return h
            .response({
            status: "success",
            message: "Penjadwalan telah dibuat",
        })
            .code(201);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
});
exports.postHandler = postHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        yield prisma_1.prisma.penjadwalan.delete({
            where: {
                id,
            },
        });
        (0, schedule_1.deletePeracikan)(id);
        return h
            .response({
            status: "success",
            message: "Penjadwalan berhasil dihapus",
        })
            .code(200);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            return boom_1.default.notFound("Tidak ada penjadwalan dengan id tersebut");
        }
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
        (0, schedule_1.onOffPeracikan)(id);
        return h
            .response({
            status: "success",
            message: `Penjadwalan berhasil di-${targetWaktu.isActive ? "nonaktifkan" : "aktifkan"}`,
        })
            .code(200);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
});
exports.patchHandler = patchHandler;
