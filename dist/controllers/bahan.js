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
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma_1 = require("../config/prisma");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield prisma_1.prisma.tandonBahan.findMany({
            include: {
                sensor: true,
            },
        });
        if (data.length < 1) {
            return boom_1.default.notFound("Tidak ada bahan");
        }
        return h
            .response({
            status: "success",
            data,
            cursor: (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
            totalPage: Math.ceil(data.length / 100),
        })
            .code(200);
    }
    catch (e) {
        // await prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
});
exports.getHandler = getHandler;
