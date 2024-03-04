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
    var _a, _b;
    try {
        const { resep, id_tandon } = request.payload;
        const komposisi = yield prisma_1.prisma.resep.findFirst({
            where: {
                id: resep,
            },
        });
        const rasio = yield prisma_1.prisma.tandon.findUnique({
            where: {
                id: id_tandon,
            },
            select: {
                rasioA: true,
                rasioB: true,
                rasioAir: true,
                ppm: true,
                aktuator: {
                    where: {
                        name: {
                            contains: "Selenoid",
                        },
                    },
                    select: {
                        microcontroller: {
                            select: {
                                id: true,
                                name: true
                            }
                        },
                    },
                    take: 1
                },
                capacity: true
            },
        });
        if (!komposisi) {
            return boom_1.default.notFound(`Tidak ada resep dengan nama: ${resep}`);
        }
        else if (!rasio) {
            return boom_1.default.badRequest("Konstanta pupuk belum diatur pada tandon peracikan");
        }
        else if (rasio.capacity < komposisi.volume) {
            return boom_1.default.badRequest("Volume melebihi kapasitas tandon");
        }
        return (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
            komposisi,
            konstanta: rasio,
        }), (_b = (_a = rasio === null || rasio === void 0 ? void 0 : rasio.aktuator[0].microcontroller) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0)
            .then(() => {
            return h
                .response({
                status: "success",
                message: komposisi,
            })
                .code(200);
        })
            .catch((error) => __awaiter(void 0, void 0, void 0, function* () {
            console.error("Error in publish data: ", error);
            yield prisma_1.prisma.tandon.update({
                where: {
                    id: id_tandon
                },
                data: {
                    isOnline: false
                }
            });
            return boom_1.default.serverUnavailable("Mikrokontroller tidak terhubung ke internet");
        }));
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.postHandler = postHandler;
