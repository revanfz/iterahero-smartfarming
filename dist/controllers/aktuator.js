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
exports.deleteHandler = exports.patchHandler = exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = parseInt(request.query.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    let data;
    let total = 0;
    try {
        if (id) {
            data = yield prisma_1.prisma.aktuator.findUnique({
                where: {
                    id: id,
                },
                include: {
                    category: {
                        select: {
                            logo: true,
                            name: true,
                            color: true,
                            satuan: true
                        },
                    },
                },
            });
        }
        else {
            total = yield prisma_1.prisma.aktuator.count({
                where: {
                    tandonId: id,
                },
            });
            data = yield prisma_1.prisma.aktuator.findMany({
                where: {
                    tandonId: id,
                },
                include: {
                    category: {
                        select: {
                            logo: true,
                            name: true,
                            color: true,
                        },
                    },
                },
                skip: cursor ? 1 : 0,
                take: size ? size : 100,
                cursor: cursor ? { id: cursor } : undefined,
            });
        }
        const res = {
            status: "success",
            data,
            cursor: -1,
            totalPage: 1,
        };
        if (Array.isArray(data)) {
            res.cursor = (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id;
            res.totalPage = size ? Math.ceil(total / size) : Math.ceil(total / 100);
        }
        return h.response(res).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, merek, id_greenhouse, id_tandon, type } = request.payload;
        const aktuator = yield prisma_1.prisma.aktuator.create({
            data: {
                name,
                merek,
                greenhouseId: id_greenhouse !== null && id_greenhouse !== void 0 ? id_greenhouse : null,
                tandonId: id_tandon !== null && id_tandon !== void 0 ? id_tandon : null,
                type,
            },
        });
        return h.response({
            status: "success",
            message: `${aktuator.name} berhasil ditambahkan`,
        });
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_aktuator = parseInt(request.query.id);
        if (isNaN(id_aktuator)) {
            return boom_1.default.badRequest("ID Sensor tidak valid");
        }
        const { name, merek, type } = request.payload;
        const target = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada id tersebut");
        }
        yield prisma_1.prisma.aktuator.update({
            where: {
                id: id_aktuator,
            },
            data: {
                name,
                merek,
                type,
            },
        });
        return h.response({
            status: "success",
            message: `${target.name} berhasil diperbarui`,
        });
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_aktuator = parseInt(request.query.id);
        if (isNaN(id_aktuator)) {
            return boom_1.default.badRequest("ID aktuator  tidak valid");
        }
        const target = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada sensor dengan id tersebut");
        }
        yield prisma_1.prisma.aktuator.delete({
            where: {
                id: id_aktuator,
            },
        });
        return h.response({
            status: "success",
            message: `${target.name} berhasil dihapus`,
        });
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
