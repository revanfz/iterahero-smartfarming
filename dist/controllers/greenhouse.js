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
exports.postHandler = exports.getHandler = void 0;
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const cloudinary_1 = require("../config/cloudinary");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const data = yield prisma_1.prisma.greenhouse.findMany({
            where: {
                user: {
                    every: {
                        id: id_user
                    }
                }
            }
        });
        if (!data) {
            return boom_1.default.notFound("Tidak ada greenhouse.");
        }
        return h.response({
            status: "success",
            data
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
    finally {
        prisma_1.prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_user } = request.auth.credentials;
        const { nama, thumbnail } = request.payload;
        console.log(thumbnail);
        const isExist = yield prisma_1.prisma.greenhouse.findUnique({
            where: {
                nama
            }
        });
        if (isExist) {
            return boom_1.default.forbidden(`Greenhouse ${nama} sudah ada.`);
        }
        const upload = yield (0, cloudinary_1.uploadImage)(thumbnail, nama);
        if (!upload) {
            throw Error("Terjadi kesalahan saat mengupload");
        }
        yield prisma_1.prisma.greenhouse.create({
            data: {
                nama,
                thumbnail: upload.secure_url,
                user: {
                    connect: {
                        id: id_user
                    }
                }
            }
        });
        return h.response({
            status: "ok",
            message: `Greenhouse ${nama} berhasil ditambahkan.`
        }).code(200);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return boom_1.default.internal(e, { kocak: "wwkwk" });
        }
    }
    finally {
        prisma_1.prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
