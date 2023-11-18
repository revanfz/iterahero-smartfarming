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
const Sensor_1 = __importDefault(require("../models/Sensor"));
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filter = {};
        const id_greenhouse = request.query.id_greenhouse;
        const id_tandon = request.query.id_tandon;
        if (id_greenhouse) {
            filter = { greenhouseId: id_greenhouse };
        }
        if (id_tandon) {
            filter = { tandonId: id_tandon };
        }
        const data = yield Sensor_1.default.find(filter);
        return h.response({
            status: 'success',
            data
        });
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            boom_1.default.internal(e.message);
        }
    }
});
exports.getHandler = getHandler;