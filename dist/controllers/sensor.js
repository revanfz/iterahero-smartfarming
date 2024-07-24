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
exports.deleteHandler = exports.patchHandler = exports.postHandler = exports.getHandler = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = parseInt(request.query.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    const filter = request.query.filter;
    try {
        let data;
        if (!isNaN(id)) {
            data = yield prisma_1.default.sensor.findUnique({
                where: {
                    id,
                },
                include: {
                    category: {
                        select: {
                            logo: true,
                            name: true,
                            color: true,
                            satuan: true
                        },
                    },
                    microcontroller: true
                },
            });
            return h
                .response({
                status: "success",
                data,
            })
                .code(200);
        }
        else if (filter) {
            if (filter === 'greenhouse') {
                data = yield prisma_1.default.sensor.findMany({
                    where: {
                        greenhouseId: {
                            not: null
                        }
                    }
                });
            }
            else if (filter === 'tandon') {
                data = yield prisma_1.default.sensor.findMany({
                    where: {
                        tandonId: {
                            not: null
                        }
                    }
                });
            }
            return h.response({
                status: 'success',
                data,
            }).code(200);
        }
        else {
            const total = yield prisma_1.default.sensor.count();
            data = yield prisma_1.default.sensor.findMany({
                include: {
                    category: {
                        select: {
                            logo: true,
                            name: true,
                            color: true,
                            satuan: true
                        },
                    },
                },
                take: size ? size : 100,
                skip: cursor ? 1 : 0,
                cursor: cursor ? { id: cursor } : undefined,
            });
            return h
                .response({
                status: "success",
                data,
                cursor: id !== null && id !== void 0 ? id : (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
                totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
            })
                .code(200);
        }
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, brand, calibration, unit_measurement, type, range_min, range_max, id_greenhouse, id_tandon } = request.payload;
        const sensor = yield prisma_1.default.sensor.create({
            data: {
                greenhouseId: id_greenhouse,
                tandonId: id_tandon,
                name,
                brand,
                calibration,
                unit_measurement,
                type,
                range_min,
                range_max,
            },
        });
        return h.response({
            status: "success",
            message: `${sensor.name} berhasil ditambahkan`,
        });
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
exports.postHandler = postHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_sensor = parseInt(request.query.id);
        if (isNaN(id_sensor)) {
            return boom_1.default.badRequest("ID Sensor tidak valid");
        }
        const { name, brand, calibration, unit_measurement, type, range_min, range_max, } = request.payload;
        const target = yield prisma_1.default.sensor.findUnique({
            where: {
                id: id_sensor,
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada id tersebut");
        }
        yield prisma_1.default.sensor.update({
            where: {
                id: id_sensor,
            },
            data: {
                name,
                brand,
                calibration,
                unit_measurement,
                type,
                range_max,
                range_min,
            },
        });
        return h.response({
            status: "success",
            message: `${target.name} berhasil diperbarui`,
        });
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
exports.patchHandler = patchHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_sensor = parseInt(request.query.id);
        if (isNaN(id_sensor)) {
            return boom_1.default.badRequest("ID Sensor tidak valid");
        }
        const target = yield prisma_1.default.sensor.findUnique({
            where: {
                id: id_sensor,
            },
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada sensor dengan id tersebut");
        }
        yield prisma_1.default.sensor.delete({
            where: {
                id: id_sensor,
            },
        });
        return h.response({
            status: "success",
            message: `${target.name} berhasil dihapus`,
        });
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
