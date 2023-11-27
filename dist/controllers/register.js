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
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username, password, email } = request.payload;
        const isRegistered = yield prisma_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (isRegistered) {
            return boom_1.default.forbidden("Username sudah terdaftar");
        }
        yield prisma_1.prisma.user.create({
            data: {
                name,
                username,
                password: yield bcrypt_1.default.hash(password, 10),
                email,
                role: "operator",
            }
        });
        return h.response({
            status: 'success',
            message: `Akun ${email} berhasil didaftarkan`
        }).code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    yield prisma_1.prisma.$disconnect();
});
exports.postHandler = postHandler;
