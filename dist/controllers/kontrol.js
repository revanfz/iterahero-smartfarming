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
const mqtt_1 = require("../config/mqtt");
const postHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.query;
        const data = yield prisma_1.prisma.aktuator.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (data === null || data === void 0 ? void 0 : data.microcontrollerId) {
            const target = yield prisma_1.prisma.microcontroller.findUnique({
                where: {
                    id: data === null || data === void 0 ? void 0 : data.microcontrollerId,
                },
            });
            if (!data) {
                return boom_1.default.notFound("Tidak ada aktuator dengan id tersebut");
            }
            if (!target) {
                return boom_1.default.badRequest("Aktuator belum terhubung ke microcontroller");
            }
            return (0, mqtt_1.publishData)("iterahero2023/kontrol", JSON.stringify({
                pin: data.GPIO,
                state: !data.isActive,
                microcontroller: target === null || target === void 0 ? void 0 : target.name,
            }), target.id)
                .then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield prisma_1.prisma.aktuator.updateMany({
                    where: {
                        GPIO: data.GPIO,
                        microcontrollerId: data.microcontrollerId,
                    },
                    data: {
                        isActive: !data.isActive,
                    },
                });
                return h
                    .response({
                    status: "success",
                    message: `${data.name} berhasil ${data.isActive ? "dimatikan" : "dinyalakan"}`,
                })
                    .code(200);
            }))
                .catch((error) => {
                console.error("Error in publish data: ", error);
                return boom_1.default.serverUnavailable("Mikrokontroller tidak terhubung ke internet");
            });
        }
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.badImplementation(e.message);
        }
    }
});
exports.postHandler = postHandler;
