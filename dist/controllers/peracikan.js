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
exports.getHandler = exports.postHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = request.payload;
        if (input.nama) {
            // Mau nambahin resep berarti
        }
        const data = yield prisma_1.prisma.peracikan.findMany({
            where: {
                greenhouseId: input.id_greenhouse,
            },
            include: {
                penjadwalan: true,
            },
        });
        if (!data) {
            return boom_1.default.notFound("Data tidak ditemukan");
        }
        return h
            .response({
            status: "success",
            data,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.postHandler = postHandler;
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_greenhouse } = request.query;
        const data = yield prisma_1.prisma.peracikan.findFirst({
            where: {
                greenhouseId: id_greenhouse,
            },
        });
        if (!data) {
            return boom_1.default.notFound("Data tidak ditemukan");
        }
        return h
            .response({
            status: "success",
            data,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.getHandler = getHandler;
