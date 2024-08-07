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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const prisma_1 = __importDefault(require("../config/prisma"));
const boom_1 = __importDefault(require("@hapi/boom"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getHandler = (request, h) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200);
};
exports.getHandler = getHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.payload;
        const user = yield prisma_1.default.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return boom_1.default.unauthorized(`Username dengan ${email} tidak terdaftar`);
        }
        const correctPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!correctPassword) {
            return boom_1.default.unauthorized("Username tidak terdaftar");
        }
        // const tokenExpiry = new Date(Date.now() + ((3 * 24) + 7) * 60 * 60 * 1000)
        const payloadJwt = {
            email,
            id_user: user.id,
            role: user.role,
            // tokenExpiry,
            aud: process.env.JWT_AUD,
            iss: process.env.JWT_ISS,
            sub: process.env.JWT_SUB
        };
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jsonwebtoken_1.default.sign(payloadJwt, jwtSecret, { expiresIn: "3d" });
        return h.response({
            status: 'success',
            accessToken: token
            // data: {
            //     accessToken: token,
            //     email: user.email,
            //     id_user: user.id,
            //     role: user.role,
            //     tokenExpiry
            // }
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
    // await prisma.$disconnect();
});
exports.postHandler = postHandler;
