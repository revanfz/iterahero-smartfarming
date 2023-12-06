"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHandler = exports.patchHandler = exports.postHandler = exports.getHandler = void 0;
const Boom = __importStar(require("@hapi/boom"));
const prisma_1 = require("../config/prisma");
const agenda_1 = require("../utils/agenda");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_aktuator = parseInt(request.query.id);
        if (isNaN(id_aktuator)) {
            return Boom.badRequest("ID aktuator invalid");
        }
        const bySensor = yield prisma_1.prisma.automationSensor.findMany({
            where: {
                aktuatorId: id_aktuator,
            },
        });
        const bySchedule = yield prisma_1.prisma.automationSchedule.findUnique({
            where: {
                aktuatorId: id_aktuator,
            },
        });
        return h
            .response({
            status: "success",
            data: [...bySensor, bySchedule].filter(item => item !== null),
        })
            .code(200);
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_aktuator, id_sensor, hari, interval, duration, condition, action, iterasi, constant, startTime, } = request.payload;
    try {
        if (id_sensor) {
            yield prisma_1.prisma.automationSensor.create({
                data: {
                    aktuatorId: id_aktuator,
                    sensorId: id_sensor,
                    action,
                    condition,
                    constant,
                },
            });
            return h
                .response({
                status: "success",
                message: `Automasi berdasarkan sensor berhasil ditambahkan`,
            })
                .code(201);
        }
        else {
            const target = yield prisma_1.prisma.automationSchedule.findUnique({
                where: {
                    aktuatorId: id_aktuator,
                },
            });
            if (target) {
                return Boom.badRequest("Cuma bisa 1 co");
            }
            const data = yield prisma_1.prisma.automationSchedule.create({
                data: {
                    aktuatorId: id_aktuator,
                    interval,
                    duration,
                    iterasi,
                    startTime,
                },
            });
            yield (0, agenda_1.createAutomation)(data);
            return h
                .response({
                status: "success",
                message: "Automasi berdasarkan jadwal berhasil ditambahkan",
            })
                .code(201);
        }
    }
    catch (e) {
        console.error(e);
        yield prisma_1.prisma.automationSchedule.delete({
            where: {
                aktuatorId: id_aktuator,
            },
        });
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
        else if (typeof e === "string") {
            return Boom.badRequest(e);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_aktuator = parseInt(request.query.id);
        if (isNaN(id_aktuator)) {
            return Boom.badRequest("ID aktuator invalid");
        }
        const target = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: id_aktuator,
            },
        });
        if (!target) {
            return Boom.notFound("Tidak ada aktuator dengan id tersebut");
        }
        const data = yield prisma_1.prisma.automationSchedule.findUnique({
            where: {
                aktuatorId: target.id,
            },
        });
        if (!data) {
            return Boom.notFound(`${target.name} belum mempunyai automasi`);
        }
        yield (0, agenda_1.onOffAutomation)(data.aktuatorId, data.isActive);
        return h.response({
            status: "success",
            message: `Automasi ${target.name} berhasil di-${data.isActive ? "matikan" : "aktifkan"}`,
        });
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_aktuator } = request.payload;
        const { type } = request.query;
        if (isNaN(id_aktuator)) {
            return Boom.badRequest("ID aktuator tidak valid");
        }
        if (type === "bySensor") {
            const { id_sensor } = request.payload;
            if (isNaN(id_sensor)) {
                return Boom.badRequest("ID sensor tidak valid");
            }
            const deletedSensor = yield prisma_1.prisma.automationSensor.deleteMany({
                where: {
                    aktuatorId: id_aktuator,
                    sensorId: id_sensor
                }
            });
            return h.response({
                status: 'success',
                message: `Automasi sensor berhasil dihapus`
            }).code(201);
        }
        else if (type === "bySchedule") {
            const deletedSchedule = yield prisma_1.prisma.automationSchedule.delete({
                where: {
                    aktuatorId: id_aktuator
                }
            });
            yield (0, agenda_1.deleteAutomation)(id_aktuator);
            return h.response({
                status: 'succes',
                message: "Automasi jadwaln berhasil dihapus"
            }).code(201);
        }
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
