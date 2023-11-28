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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadHandler = exports.getHandler = void 0;
const Boom = __importStar(require("@hapi/boom"));
const SensorLog_1 = __importDefault(require("../models/SensorLog"));
const aggregate_1 = require("../utils/aggregate");
const getHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_sensor = parseInt(request.query.id);
        const { timespan } = request.query;
        if (isNaN(id_sensor)) {
            return Boom.badRequest("ID sensor tidak valid");
        }
        const pipeline = (0, aggregate_1.pipelineSummary)(timespan, id_sensor);
        if (pipeline.length) {
            const data = yield SensorLog_1.default.aggregate(pipeline);
            return h.response({
                status: 'success',
                data
            });
        }
        else {
            return Boom.badRequest("Timespan tidak valid");
        }
    }
    catch (e) {
        console.error(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally {
    }
});
exports.getHandler = getHandler;
const downloadHandler = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id_sensor = parseInt(request.query.id);
        const { timespan } = request.query;
        if (isNaN(id_sensor)) {
            return Boom.badRequest("ID Sensor tidak valid");
        }
        const { startDate, endDate } = yield (0, aggregate_1.getSummaryTimespan)(timespan, id_sensor);
        const data = yield SensorLog_1.default.find({
            id_sensor,
            createdAt: { $gte: startDate, $lte: endDate }
        }).select("nama nilai createdAt -_id").sort({ createdAt: 1 });
        if (data.length < 1) {
            return Boom.badRequest("Data rekapan tidak ada");
        }
        const response = h.response(JSON.stringify(data)).code(200);
        response.header('Content-Type', 'application/json');
        response.header('Content-Disposition', `attachment; filename=${data[0].nama}.json`);
        return response;
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    finally { }
});
exports.downloadHandler = downloadHandler;
