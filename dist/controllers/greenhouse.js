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
exports.ghByIdHandler = exports.actuatorByGreenhouseHandler = exports.sensorByGreenhouseHandler = exports.deleteHandler = exports.patchHandler = exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const cloudinary_1 = require("../config/cloudinary");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const id = parseInt(request.query.id);
        let data;
        if (!Number.isNaN(id)) {
            data = yield prisma_1.prisma.greenhouse.findUnique({
                where: {
                    id,
                },
            });
        }
        else {
            data = yield prisma_1.prisma.greenhouse.findMany({
                where: {
                    user: {
                        every: {
                            id: id_user,
                        },
                    },
                },
            });
        }
        if (!data) {
            return boom_1.default.notFound("Tidak ada greenhouse.");
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
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const { name, thumbnail, location } = request.payload;
        const isExist = yield prisma_1.prisma.greenhouse.findUnique({
            where: {
                name,
            },
        });
        if (isExist) {
            return boom_1.default.forbidden(`Greenhouse ${name} sudah ada.`);
        }
        const upload = yield (0, cloudinary_1.uploadImage)(thumbnail, name);
        if (!upload) {
            throw Error("Terjadi kesalahan saat mengupload");
        }
        yield prisma_1.prisma.greenhouse.create({
            data: {
                name,
                thumbnail: upload.secure_url,
                user: {
                    connect: {
                        id: id_user,
                    },
                },
                location,
            },
        });
        return h
            .response({
            status: "ok",
            message: `Greenhouse ${name} berhasil ditambahkan.`,
        })
            .code(200);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = parseInt(request.query.id);
        let img_url;
        const { name, thumbnail, location } = request.payload;
        if (!isNaN(id)) {
            const target = yield prisma_1.prisma.greenhouse.findUnique({
                where: {
                    id,
                },
            });
            if (!target) {
                return boom_1.default.notFound("Tidak ada gh tersebut");
            }
            if (name) {
                yield (0, cloudinary_1.renameFile)(target.name, name);
            }
            if (thumbnail) {
                (0, cloudinary_1.deleteImage)(`gh-${target.name}`);
                img_url = yield (0, cloudinary_1.uploadImage)(thumbnail, name);
            }
            yield prisma_1.prisma.greenhouse.update({
                where: {
                    id: target.id,
                },
                data: {
                    name,
                    thumbnail: (_a = img_url === null || img_url === void 0 ? void 0 : img_url.secure_url) !== null && _a !== void 0 ? _a : target.thumbnail,
                    location,
                },
            });
            return h.response({
                status: "success",
                message: `Greenhouse ${target.name} berhasil diperbarui`,
            });
        }
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
const deleteHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        if (!isNaN(id)) {
            const target = yield prisma_1.prisma.greenhouse.findUnique({
                where: {
                    id,
                },
            });
            if (!target) {
                return boom_1.default.notFound("Tidak ada gh tersebut");
            }
            yield prisma_1.prisma.greenhouse.delete({
                where: {
                    id: target.id,
                },
            });
            yield (0, cloudinary_1.deleteImage)(`gh-${target.name}`);
            return h.response({
                status: "success",
                message: `Greenhouse ${target.name} berhasil dihapus`,
            });
        }
        else {
            throw "Invalid id";
        }
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
const sensorByGreenhouseHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.params.id);
        const data = yield prisma_1.prisma.sensor.findMany({
            where: {
                greenhouseId: id,
            },
        });
        if (!data) {
            return boom_1.default.notFound("Tidak ada sensor di greenhouse terpilih");
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
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.sensorByGreenhouseHandler = sensorByGreenhouseHandler;
const actuatorByGreenhouseHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.params.id);
        const data = yield prisma_1.prisma.aktuator.findMany({
            where: {
                greenhouseId: id,
            },
            select: {
                tandon: {
                    select: {
                        aktuator: true,
                    },
                },
            },
        });
        return h
            .response({
            status: "success",
            data,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.actuatorByGreenhouseHandler = actuatorByGreenhouseHandler;
const ghByIdHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        const data = yield prisma_1.prisma.greenhouse.findUnique({
            where: {
                id,
            },
        });
        if (!data) {
            return boom_1.default.notFound("Tidak ada gh tersebut.");
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
            console.error(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        prisma_1.prisma.$disconnect();
    }
});
exports.ghByIdHandler = ghByIdHandler;
