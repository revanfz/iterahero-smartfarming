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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = request.auth.credentials;
        const { email, role } = jsonwebtoken_1.default.decode(token.toString());
        const target = yield prisma_1.prisma.user.findUnique({
            where: {
                email
            },
            select: {
                greenhouse: {
                    include: {
                        selenoid: true
                    }
                },
                tandon: {
                    include: {
                        selenoid: true,
                        tandonBahan: {
                            include: {
                                sensor: true,
                            }
                        },
                    }
                }
            }
        });
        if (!target) {
            return boom_1.default.notFound("Tidak ada peracikan");
        }
        return h.response({
            status: 'success',
            target
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return boom_1.default.internal(e.message);
        }
    }
    prisma_1.prisma.$disconnect();
});
exports.getHandler = getHandler;
