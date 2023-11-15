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
        if (!data) {
            return boom_1.default.notFound("Tidak ada aktuator dengan id tersebut");
        }
        (0, mqtt_1.publishData)("iterahero2023/actuator", JSON.stringify({ pin: data.portRaspi }));
        return h
            .response({
            status: "success",
            message: `${data.name} berhasil dinyalakan`,
        })
            .code(200);
    }
    catch (e) {
        yield prisma_1.prisma.$disconnect();
        if (e instanceof Error) {
            console.log(e);
            return boom_1.default.internal(e.message);
        }
    }
});
exports.postHandler = postHandler;
