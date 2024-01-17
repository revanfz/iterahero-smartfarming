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
exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const target = yield prisma_1.prisma.user.findUnique({
            where: {
                id: id_user,
            },
            select: {
                _count: {
                    select: {
                        greenhouse: true,
                        tandon: true,
                    },
                },
                greenhouse: {
                    select: {
                        _count: {
                            select: {
                                aktuator: true,
                                sensor: true
                            },
                        },
                    },
                },
                tandon: {
                    select: {
                        _count: {
                            select: {
                                tandonBahan: true,
                                aktuator: true,
                                sensor: true,
                            },
                        },
                        tandonBahan: {
                            select: {
                                _count: {
                                    select: {
                                        sensor: true
                                    }
                                }
                            }
                        },
                    },
                },
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada peracikan");
        }
        const jumlahTandon = target.tandon.reduce((temp, a) => temp + a._count.tandonBahan, 0);
        const jumlahAktuatorTandon = target.tandon.reduce((temp, a) => temp + a._count.aktuator, 0);
        const jumlahAktuatorGreenhouse = target.greenhouse.reduce((temp, a) => temp + a._count.aktuator, 0);
        const jumlahSensorTandon = target.tandon.reduce((temp, a) => temp + a._count.sensor, 0);
        const jumlahSensorGreenhouse = target.greenhouse.reduce((temp, a) => temp + a._count.sensor, 0);
        return h
            .response({
            status: "success",
            data: {
                greenhouse: target._count.greenhouse,
                tandonBahan: jumlahTandon,
                actuator: jumlahAktuatorTandon + jumlahAktuatorGreenhouse,
                tandonPeracikan: target._count.tandon,
                sensor: jumlahSensorTandon + jumlahSensorGreenhouse
            },
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
