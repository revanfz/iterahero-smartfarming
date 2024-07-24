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
const prisma_1 = __importDefault(require("../config/prisma"));
const boom_1 = __importDefault(require("@hapi/boom"));
const cloudinary_1 = require("../config/cloudinary");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    const id = parseInt(request.query.id);
    let data;
    let total = 0;
    try {
        const { id_user } = request.auth.credentials;
        if (!Number.isNaN(id)) {
            data = yield prisma_1.default.greenhouse.findUnique({
                where: {
                    id,
                },
            });
        }
        else {
            total = yield prisma_1.default.greenhouse.count({
                where: {
                    user: {
                        every: {
                            id: id_user,
                        },
                    },
                },
            });
            data = yield prisma_1.default.greenhouse.findMany({
                where: {
                    user: {
                        every: {
                            id: id_user,
                        },
                    },
                },
                take: isNaN(size) ? 100 : size,
                skip: cursor ? 1 : 0,
                cursor: cursor ? { id: cursor } : undefined,
            });
        }
        if (!data) {
            //  || Array.isArray(data) && data.length < 1) {
            return boom_1.default.notFound("Tidak ada greenhouse.");
        }
        const res = {
            status: "success",
            data,
            cursor: -1,
            totalPage: 1,
        };
        if (Array.isArray(data)) {
            res.cursor = (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id;
            res.totalPage = size ? Math.ceil(total / size) : Math.ceil(total / 100);
        }
        return h.response(res).code(200);
    }
    catch (e) {
        // await prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const { name, image, location } = request.payload;
        const isExist = yield prisma_1.default.greenhouse.findUnique({
            where: {
                name,
            },
        });
        if (isExist) {
            return boom_1.default.forbidden(`Greenhouse ${name} sudah ada.`);
        }
        const upload = yield (0, cloudinary_1.uploadImage)(image, 'gh', name);
        if (!upload) {
            throw Error("Terjadi kesalahan saat mengupload");
        }
        yield prisma_1.default.greenhouse.create({
            data: {
                name,
                image: upload.secure_url,
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
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const id = parseInt(request.query.id);
        let img_url;
        const { name, image, location } = request.payload;
        if (!isNaN(id)) {
            const target = yield prisma_1.default.greenhouse.findUnique({
                where: {
                    id,
                },
            });
            if (!target) {
                return boom_1.default.notFound("Tidak ada gh tersebut");
            }
            if (name !== target.name) {
                yield (0, cloudinary_1.renameFile)('gh-' + target.name, name);
            }
            if (image) {
                (0, cloudinary_1.deleteImage)(`gh-${target.name}`);
                img_url = yield (0, cloudinary_1.uploadImage)(image, 'gh', name);
            }
            yield prisma_1.default.greenhouse.update({
                where: {
                    id: target.id,
                },
                data: {
                    name,
                    image: (_b = img_url === null || img_url === void 0 ? void 0 : img_url.secure_url) !== null && _b !== void 0 ? _b : target.image,
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
        const id = parseInt(request.query.id);
        if (!isNaN(id)) {
            const target = yield prisma_1.default.greenhouse.findUnique({
                where: {
                    id,
                },
            });
            if (!target) {
                return boom_1.default.notFound("Tidak ada gh tersebut");
            }
            yield prisma_1.default.greenhouse.delete({
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
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.deleteHandler = deleteHandler;
const sensorByGreenhouseHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = parseInt(request.params.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    try {
        const total = yield prisma_1.default.sensor.count({
            where: {
                greenhouseId: id,
            },
        });
        const data = yield prisma_1.default.sensor.findMany({
            where: {
                greenhouseId: id,
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
            cursor: cursor ? { id: cursor } : undefined,
            take: size ? size : 100,
            skip: cursor ? 1 : 0,
        });
        // if (data.length < 1) {
        //   return Boom.notFound("Tidak ada sensor di greenhouse terpilih");
        // }
        return h
            .response({
            status: "success",
            data,
            cursor: (_c = data[data.length - 1]) === null || _c === void 0 ? void 0 : _c.id,
            totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
            totalData: yield prisma_1.default.sensor.count({
                where: {
                    greenhouseId: id
                }
            })
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.sensorByGreenhouseHandler = sensorByGreenhouseHandler;
const actuatorByGreenhouseHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    try {
        const id = parseInt(request.params.id);
        const total = yield prisma_1.default.aktuator.count({
            where: {
                greenhouseId: id,
            },
        });
        const data = yield prisma_1.default.aktuator.findMany({
            where: {
                greenhouseId: id,
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
            take: size ? size : 100,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        // if (data.length < 1) {
        //   return Boom.notFound("Tidak ada sensor di greenhouse terpilih");
        // }
        return h
            .response({
            status: "success",
            data,
            cursor: (_d = data[data.length - 1]) === null || _d === void 0 ? void 0 : _d.id,
            totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
            totalData: yield prisma_1.default.aktuator.count({
                where: {
                    greenhouseId: id
                }
            })
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
    finally {
        // await prisma.$disconnect();
    }
});
exports.actuatorByGreenhouseHandler = actuatorByGreenhouseHandler;
const ghByIdHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(request.query.id);
        const data = yield prisma_1.default.greenhouse.findUnique({
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
        // prisma.$disconnect();
        if (e instanceof Error) {
            console.error(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.ghByIdHandler = ghByIdHandler;
