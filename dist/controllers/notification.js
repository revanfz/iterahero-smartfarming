"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = exports.patchHandler = exports.getHandler = void 0;
const Boom = __importStar(require("@hapi/boom"));
const prisma_1 = require("../config/prisma");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const size = parseInt(request.query.size);
    const cursor = parseInt(request.query.cursor);
    const read = request.query.isRead;
    let data;
    const { id_user } = request.auth.credentials;
    try {
        if (read === "false") {
            data = yield prisma_1.prisma.notification.findMany({
                where: {
                    userId: id_user,
                    read: false
                },
                orderBy: {
                    created_at: 'desc'
                },
                cursor: cursor ? { id: cursor } : undefined,
                take: size ? size : 100,
                skip: cursor ? 1 : 0,
            });
        }
        data = yield prisma_1.prisma.notification.findMany({
            where: {
                userId: id_user,
            },
            orderBy: {
                created_at: 'desc'
            },
            cursor: cursor ? { id: cursor } : undefined,
            take: size ? size : 100,
            skip: cursor ? 1 : 0,
        });
        return h
            .response({
            status: "success",
            data,
            cursor: (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.id,
        })
            .code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.getHandler = getHandler;
const patchHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.payload;
        const updatePromise = id.map((identifier) => {
            prisma_1.prisma.notification.update({
                where: {
                    id: identifier,
                },
                data: {
                    read: true,
                },
            });
        });
        yield Promise.all(updatePromise);
        return h.response({
            status: 'success',
            message: 'Notifikasi telah dibaca'
        }).code(200);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.patchHandler = patchHandler;
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_user } = request.auth.credentials;
    try {
        for (let i = 0; i < 3; i++) {
            yield prisma_1.prisma.notification.create({
                data: {
                    message: `Hello ${i}`,
                    read: false,
                    userId: id_user,
                },
            });
        }
        return h.response({
            status: "success",
            message: "Notif ditambahin",
        });
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return Boom.internal(e.message);
        }
    }
    finally {
        yield prisma_1.prisma.$disconnect();
    }
});
exports.postHandler = postHandler;
