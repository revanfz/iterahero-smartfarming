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
exports.putHandler = exports.deleteHandler = exports.patchHandler = exports.postHandler = exports.getHandler = void 0;
const Boom = __importStar(require("@hapi/boom"));
const prisma_1 = require("../config/prisma");
const agenda_1 = require("../utils/agenda");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const id_aktuator = parseInt(request.query.id);
        const id_automation = parseInt(request.query.id_automation);
        const type = request.query.type;
        const tandonId = request.query.tandonId;
        if (type) {
            if (type === "bySchedule") {
                let where = {};
                if (id_automation !== 0) {
                    where.id = id_automation;
                }
                if (tandonId) {
                    where = Object.assign(Object.assign({}, where), { aktuator: { tandonId: parseInt(tandonId) } });
                }
                const data = yield prisma_1.prisma.automationSchedule[id_automation !== 0 ? "findFirst" : "findMany"]({
                    where,
                    include: {
                        aktuator: {
                            include: {
                                greenhouse: {
                                    where: {
                                        user: {
                                            every: {
                                                id: id_user,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                return h.response({
                    status: "success",
                    data,
                });
            }
            else if (type === "bySensor") {
                const data = yield prisma_1.prisma.automationSensor.findUnique({
                    where: {
                        id: id_automation,
                    },
                    include: {
                        sensor: true,
                        aktuator: true,
                    },
                });
                return h.response({
                    status: "success",
                    data,
                });
            }
        }
        if (isNaN(id_aktuator)) {
            return Boom.badRequest("ID aktuator invalid");
        }
        const bySensor = yield prisma_1.prisma.automationSensor.findMany({
            where: {
                aktuatorId: id_aktuator,
            },
            include: {
                aktuator: true,
                sensor: true,
            },
        });
        const bySchedule = yield prisma_1.prisma.automationSchedule.findUnique({
            where: {
                aktuatorId: id_aktuator,
            },
            include: {
                aktuator: true,
            },
        });
        return h
            .response({
            status: "success",
            data: [...bySensor, bySchedule].filter((item) => item !== null),
        })
            .code(200);
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_aktuator, id_sensor, hari, interval, duration, condition, action, iterasi, constant, startTime, } = request.payload;
    try {
        if (id_sensor) {
            const isExist = yield prisma_1.prisma.automationSensor.count({
                where: {
                    aktuatorId: id_aktuator,
                    sensorId: id_sensor,
                },
            });
            if (isExist) {
                return Boom.badRequest("Sudah ada automasi yang memakai sensor ini");
            }
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
            yield prisma_1.prisma.aktuator.update({
                where: {
                    id: id_aktuator,
                },
                data: {
                    automation: true,
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
            return Boom.badImplementation(e.message);
        }
        else if (typeof e === "string") {
            return Boom.badRequest(e);
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
        const dataSchedule = yield prisma_1.prisma.automationSchedule.findUnique({
            where: {
                aktuatorId: target.id,
            },
        });
        const dataSensor = yield prisma_1.prisma.automationSensor.count({
            where: {
                aktuatorId: id_aktuator,
            },
        });
        if (dataSchedule) {
            yield (0, agenda_1.onOffAutomation)(dataSchedule.aktuatorId, dataSchedule.isActive);
            yield prisma_1.prisma.automationSchedule.update({
                where: {
                    aktuatorId: id_aktuator,
                },
                data: {
                    isActive: !target.automation,
                },
            });
        }
        if (dataSensor) {
            yield prisma_1.prisma.automationSensor.updateMany({
                where: {
                    aktuatorId: id_aktuator,
                },
                data: {
                    isActive: !target.automation,
                },
            });
        }
        if (!dataSchedule && !dataSensor) {
            yield prisma_1.prisma.aktuator.update({
                where: {
                    id: id_aktuator,
                },
                data: {
                    automation: false,
                },
            });
            return Boom.notFound(`Tidak ada automasi pada ${target.name}`);
        }
        yield prisma_1.prisma.aktuator.update({
            where: {
                id: target.id,
            },
            data: {
                automation: !target.automation,
            },
        });
        return h.response({
            status: "success",
            message: `Automasi ${target.name} berhasil di-${target.automation ? "matikan" : "aktifkan"}`,
        });
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_automation = parseInt(request.query.id);
        // const { id_aktuator } = request.payload as { id_aktuator: number }
        const { type } = request.query;
        let target;
        if (isNaN(id_automation)) {
            return Boom.badRequest("ID aktuator tidak valid");
        }
        if (type === "bySensor") {
            const id_sensor = parseInt(request.query.id_sensor);
            if (isNaN(id_sensor)) {
                return Boom.badRequest("ID sensor tidak valid");
            }
            target = yield prisma_1.prisma.automationSensor.findFirst({
                where: {
                    id: id_automation,
                },
            });
            const deletedSensor = yield prisma_1.prisma.automationSensor.deleteMany({
                where: {
                    id: id_automation,
                },
            });
        }
        else if (type === "bySchedule") {
            target = yield prisma_1.prisma.automationSchedule.findFirst({
                where: {
                    id: id_automation,
                },
            });
            const deletedSchedule = yield prisma_1.prisma.automationSchedule.delete({
                where: {
                    id: id_automation,
                },
            });
            yield (0, agenda_1.deleteAutomation)(id_automation);
        }
        else {
            return Boom.badRequest("Tipe automasi tidak valid");
        }
        const jumlahAutomasiSensor = yield prisma_1.prisma.automationSensor.count({
            where: {
                aktuatorId: target === null || target === void 0 ? void 0 : target.aktuatorId,
            },
        });
        const jumlahAutomasiJadwal = yield prisma_1.prisma.automationSchedule.count({
            where: {
                aktuatorId: target === null || target === void 0 ? void 0 : target.aktuatorId,
            },
        });
        if (jumlahAutomasiJadwal + jumlahAutomasiSensor === 0) {
            yield prisma_1.prisma.aktuator.update({
                where: {
                    id: target === null || target === void 0 ? void 0 : target.aktuatorId,
                },
                data: {
                    automation: false,
                },
            });
        }
        return h
            .response({
            status: "success",
            message: `Automasi ${type === "bySensor" ? "sensor" : "jadwal"} berhasil dihapus`,
        })
            .code(201);
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
const putHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_aktuator, id_sensor, hari, interval, duration, condition, action, iterasi, constant, startTime, } = request.payload;
        const id_automation = parseInt(request.query.id);
        const { type } = request.query;
        if (isNaN(id_automation)) {
            return Boom.badRequest("ID automation tidak valid");
        }
        if (type === "bySensor") {
            yield prisma_1.prisma.automationSensor.update({
                where: {
                    id: id_automation,
                },
                data: {
                    sensorId: id_sensor,
                    action,
                    condition,
                    constant,
                },
            });
            return h
                .response({
                status: "success",
                message: `Automasi berdasarkan sensor berhasil diperbarui`,
            })
                .code(201);
        }
        else if (type === "bySchedule") {
            const data = yield prisma_1.prisma.automationSchedule.update({
                where: {
                    id: id_automation,
                },
                data: {
                    interval,
                    duration,
                    iterasi,
                    startTime,
                },
            });
            yield (0, agenda_1.deleteAutomation)(id_aktuator);
            yield (0, agenda_1.createAutomation)(data);
            return h
                .response({
                status: "success",
                message: "Automasi berdasarkan jadwal berhasil diperbarui",
            })
                .code(201);
        }
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect()
    }
});
exports.putHandler = putHandler;
