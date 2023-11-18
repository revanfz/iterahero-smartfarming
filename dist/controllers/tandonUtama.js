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
exports.patchHandler = exports.actuatorByTandonHandler = exports.sensorByTandonHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const id = parseInt(request.query.id);
        let data;
        if (isNaN(id)) {
            data = yield prisma_1.prisma.tandon.findMany({
                where: {
                    userId: id_user,
                },
            });
        }
        else {
            data = yield prisma_1.prisma.tandon.findUnique({
                where: {
                    id,
                },
            });
        }
        if (!data) {
            return boom_1.default.notFound("Tidak ada tandon terpilih");
        }
        return h
            .response({
            status: "success",
            data,
        })
            .code(200);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
});
exports.getHandler = getHandler;
const sensorByTandonHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = parseInt(request.params.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    try {
        const total = yield prisma_1.prisma.sensor.count({
            where: {
                tandon: {
                    id,
                },
            },
        });
        const data = yield prisma_1.prisma.sensor.findMany({
            where: {
                tandon: {
                    id,
                },
            },
            include: {
                icon: {
                    select: {
                        logo: true,
                    }
                }
            },
            take: size ? size : 100,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        // if (data.length < 1) {
        //     return Boom.notFound("Tidak ada sensor")
        // }
        return h.response({
            status: "success",
            data,
            cursor: (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
            totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        });
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.sensorByTandonHandler = sensorByTandonHandler;
const actuatorByTandonHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = parseInt(request.params.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    try {
        const total = yield prisma_1.prisma.aktuator.count({
            where: {
                tandonId: id,
            },
        });
        const data = yield prisma_1.prisma.aktuator.findMany({
            where: {
                tandonId: id,
            },
            include: {
                icon: {
                    select: {
                        logo: true
                    }
                }
            },
            take: size ? size : 100,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        // if (data.length < 1) {
        //     return Boom.notFound("Tidak ada aktuator")
        // }
        return h
            .response({
            status: "success",
            data,
            cursor: (_b = data[data.length - 1]) === null || _b === void 0 ? void 0 : _b.id,
            totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.actuatorByTandonHandler = actuatorByTandonHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_tandon, ppm, rasioA, rasioB, rasioAir } = request.payload;
        const target = yield prisma_1.prisma.tandon.findUnique({
            where: {
                id: id_tandon,
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada tandon terpilih.");
        }
        yield prisma_1.prisma.tandon.update({
            where: {
                id: id_tandon,
            },
            data: {
                ppm,
                rasioA,
                rasioB,
                rasioAir,
            },
        });
        return h.response({
            status: "success",
            message: `Rasio ${target.nama} berhasil diperbarui`,
        });
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
