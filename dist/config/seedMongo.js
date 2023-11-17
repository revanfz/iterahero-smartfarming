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
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const Sensor_1 = __importDefault(require("../models/Sensor"));
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(process.env.MONGODB_URL || '');
});
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connect();
    try {
        yield Sensor_1.default.insertMany([
            { nama: "Sensor PH", sensorId: 14 },
            { nama: "Sensor Suhu", sensorId: 15 },
            { nama: "Sensor TDS", sensorId: 16 }
        ], { ordered: false });
    }
    catch (error) {
    }
    finally {
        mongoose_1.default.disconnect();
    }
});
seedData();
