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
exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipe = request.query.tipe;
        const data = yield prisma_1.prisma.resep.findMany({
            where: {
                tipe
            }
        });
        if (data.length < 1) {
            return boom_1.default.notFound("Tidak ada resep tersimpan");
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
    yield prisma_1.prisma.$disconnect();
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nama, ppm, ph, interval, tipe, idTandonPenyimpanan } = request.payload;
        yield prisma_1.prisma.resep.create({
            data: {
                nama,
                ppm,
                ph,
                interval,
                tipe,
                tandonPenyimpanan: {
                    connect: {
                        id: idTandonPenyimpanan
                    }
                }
            }
        });
        return h.response({
            status: 'success',
            message: `Resep ${nama} berhasil ditambahkan`
        }).code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    yield prisma_1.prisma.$disconnect();
});
exports.postHandler = postHandler;
