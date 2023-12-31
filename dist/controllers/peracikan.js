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
exports.postHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma_1 = require("../config/prisma");
const mqtt_1 = require("../config/mqtt");
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resep, id_tandon } = request.payload;
        const komposisi = yield prisma_1.prisma.resep.findFirst({
            where: {
                id: resep,
            },
        });
        const rasio = yield prisma_1.prisma.tandon.findUnique({
            where: {
                id: id_tandon
            },
            select: {
                rasioA: true,
                rasioB: true,
                rasioAir: true,
                ppm: true
            }
        });
        (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
            komposisi,
            konstanta: rasio,
        }));
        if (!komposisi) {
            return boom_1.default.notFound(`Tidak ada resep dengan nama: ${resep}`);
        }
        else if (!rasio) {
            return boom_1.default.badRequest("Konstanta pupuk belum diatur pada tandon peracikan");
        }
        return h
            .response({
            status: "success",
            message: komposisi,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
