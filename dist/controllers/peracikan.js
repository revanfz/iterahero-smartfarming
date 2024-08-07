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
exports.cancelPeracikanHandler = exports.postHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma_1 = __importDefault(require("../config/prisma"));
const mqtt_1 = require("../config/mqtt");
const AktuatorLog_1 = __importDefault(require("../models/AktuatorLog"));
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { resep, id_tandon } = request.payload;
        const { id_user } = request.auth.credentials;
        const komposisi = yield prisma_1.default.resep.findFirst({
            where: {
                id: resep,
            },
        });
        const tandon = yield prisma_1.default.tandon.findUnique({
            where: {
                id: id_tandon,
            },
            select: {
                nama: true,
                location: true,
                rasioA: true,
                rasioB: true,
                rasioAir: true,
                ppm: true,
                volume: true,
                aktuator: {
                    where: {
                        name: {
                            contains: "Solenoid",
                        },
                    },
                    select: {
                        microcontroller: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                    take: 1,
                },
                capacity: true,
            },
        });
        if (!komposisi) {
            return boom_1.default.notFound(`Tidak ada resep dengan nama: ${resep}`);
        }
        else if (!tandon) {
            return boom_1.default.badRequest("Konstanta pupuk belum diatur pada tandon peracikan");
        }
        else if (tandon.capacity < komposisi.volume ||
            tandon.volume + komposisi.volume > tandon.capacity) {
            return boom_1.default.badRequest("Volume melebihi kapasitas tandon");
        }
        try {
            yield (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
                komposisi,
                konstanta: tandon,
            }), (_b = (_a = tandon === null || tandon === void 0 ? void 0 : tandon.aktuator[0].microcontroller) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0);
        }
        catch (e) {
            console.error("Error in publish data: ", e);
            yield prisma_1.default.tandon.update({
                where: {
                    id: id_tandon,
                },
                data: {
                    isOnline: false,
                },
            });
            yield prisma_1.default.notification.create({
                data: {
                    userId: id_user,
                    header: "Peracikan gagal dilakukan",
                    message: "Peracikan gagal dilakukan, mikrokontroller tidak terhubung ke internet",
                    loc: tandon.nama + ", " + tandon.location,
                },
            });
            return boom_1.default.serverUnavailable("Mikrokontroller tidak terhubung ke internet");
        }
        yield prisma_1.default.notification.create({
            data: {
                userId: id_user,
                header: `Peracikan ${komposisi.nama} dimulai`,
                message: `Peracikan ${komposisi.nama} dimulai, PH target: ${komposisi.ph_min} - ${komposisi.ph_max}, PPM target ${komposisi.ppm_min} - ${komposisi.ppm_max}`,
                loc: tandon.nama + ", " + tandon.location,
            },
        });
        const selectedActuator = yield prisma_1.default.aktuator.findMany({
            where: {
                microcontrollerId: (_c = tandon.aktuator[0].microcontroller) === null || _c === void 0 ? void 0 : _c.id,
            },
            select: {
                id: true,
                name: true,
            },
        });
        for (const act of selectedActuator) {
            yield AktuatorLog_1.default.create({
                id_aktuator: act.id,
                message: `${act.name} menyala`,
                status: true,
            });
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
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.postHandler = postHandler;
const cancelPeracikanHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const actor = yield prisma_1.default.user.findUnique({
            where: {
                id: id_user,
            },
            select: {
                username: true,
            },
        });
        const { id_tandon } = request.payload;
        const tandon = yield prisma_1.default.tandon.findUnique({
            where: {
                id: id_tandon,
            },
            include: {
                microcontroller: true,
                aktuator: true,
            },
        });
        if (tandon) {
            try {
                yield (0, mqtt_1.publishData)("iterahero2023/peracikan/cancel", JSON.stringify({
                    microcontroller: tandon.microcontroller[0].name,
                }), tandon.microcontroller[0].id);
            }
            catch (error) {
                console.error("Error in publish data: ", error);
                yield prisma_1.default.notification.create({
                    data: {
                        userId: id_user,
                        header: "Peracikan gagal dibatalkan",
                        message: "Peracikan gagal dibatalkan, mikrokontroller tidak terhubung ke internet",
                        loc: tandon.nama + ", " + tandon.location,
                    },
                });
                return boom_1.default.serverUnavailable("Mikrokontroller tidak terhubung ke internet");
            }
            yield prisma_1.default.notification.create({
                data: {
                    userId: id_user,
                    header: "Peracikan dibatalkan",
                    message: "Peracikan dibatalkan dengan manual oleh " + (actor === null || actor === void 0 ? void 0 : actor.username),
                    loc: tandon.nama + "," + tandon.location,
                },
            });
            for (const act of tandon.aktuator) {
                yield AktuatorLog_1.default.create({
                    id_aktuator: act.id,
                    message: `${act.name} dimatikan`,
                    status: false,
                });
            }
            return h.response({
                status: "success",
                message: "Peracikan dibatalkan",
            });
        }
        else {
            return boom_1.default.notFound("Tandon tidak ditemukan");
        }
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.cancelPeracikanHandler = cancelPeracikanHandler;
