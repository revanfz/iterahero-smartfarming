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
exports.deleteHandler = exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipe = request.query.tipe;
        const data = yield prisma_1.prisma.resep.findMany();
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
            return boom_1.default.internal(e.message);
        }
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { nama, ppm, ph, volume } = request.payload;
        yield prisma_1.prisma.resep.create({
            data: {
                nama,
                ppm,
                ph,
                volume,
            },
        });
        return h
            .response({
            status: "success",
            message: `Resep ${nama} berhasil ditambahkan`,
        })
            .code(201);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e.stack);
            return boom_1.default.internal((_a = e.stack) === null || _a === void 0 ? void 0 : _a.toString());
        }
    }
});
exports.postHandler = postHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        if (isNaN(id)) {
            return boom_1.default.badRequest("ID tidak valid");
        }
        yield prisma_1.prisma.resep.delete({
            where: {
                id,
            },
        });
        return h
            .response({
            status: "success",
            message: "Resep berhasil dihapus",
        })
            .code(201);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal("ID tidak ditemukan");
        }
    }
});
exports.deleteHandler = deleteHandler;
