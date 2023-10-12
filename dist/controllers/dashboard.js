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
        const token = request.auth.credentials;
        const { email, role } = token;
        const target = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
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
        const jumlahAktuator = target.tandon.reduce((temp, a) => temp + a._count.aktuator, 0);
        const jumlahSensor = target.tandon.reduce((temp, a) => temp + a._count.sensor, 0) + target.tandon.reduce((temp, a) => temp + a.tandonBahan.length, 0);
        return h
            .response({
            status: "success",
            data: {
                greenhouse: target._count.greenhouse,
                tandonBahan: jumlahTandon,
                actuator: jumlahAktuator,
                tandonPeracikan: target._count.tandon,
                sensor: jumlahSensor
            },
        })
            .code(200);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    yield prisma_1.prisma.$disconnect();
});
exports.getHandler = getHandler;
