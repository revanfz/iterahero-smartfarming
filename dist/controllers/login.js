"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = exports.getHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const getHandler = (request, h) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200);
};
exports.getHandler = getHandler;
const postHandler = (request, h) => {
    try {
        const payloadJwt = {
            username: "wkwkw",
            password: "wkwkwk",
            aud: process.env.JWT_AUD,
            iss: process.env.JWT_ISS,
            sub: process.env.JWT_SUB
        };
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jsonwebtoken_1.default.sign(payloadJwt, jwtSecret);
        return h.response({
            status: 'success',
            accessToken: token,
        }).code(200);
    }
    catch (e) {
        console.error(e);
    }
};
exports.postHandler = postHandler;
