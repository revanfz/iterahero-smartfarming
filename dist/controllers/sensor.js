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
const prisma_1 = require("../config/prisma");
const boom_1 = __importDefault(require("@hapi/boom"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = parseInt(request.query.id);
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    try {
        let data;
        if (!isNaN(id)) {
            data = yield prisma_1.prisma.sensor.findUnique({
                where: {
                    id
                }
            });
            if (!data) {
                return boom_1.default.notFound(`Tidak ada sensor dengan id ${id}`);
            }
            else {
                return h.response({
                    status: "success",
                    data
                }).code(200);
            }
        }
        else {
            const total = yield prisma_1.prisma.sensor.count();
            data = yield prisma_1.prisma.sensor.findMany({
                include: {
                    icon: {
                        select: {
                            logo: true
                        }
                    }
                },
                take: size ? size : 100,
                skip: cursor ? 1 : 0,
                cursor: cursor ? { id: cursor } : undefined,
            });
            return h.response({
                status: "success",
                data,
                cursor: id !== null && id !== void 0 ? id : (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
                totalPage: size ? Math.ceil(total / size) : Math.ceil(total / 100),
            }).code(200);
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
exports.getHandler = getHandler;
