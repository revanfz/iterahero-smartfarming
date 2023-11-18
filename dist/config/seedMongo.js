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
const prisma_1 = require("./prisma");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(process.env.MONGODB_URL || "");
});
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connect();
    try {
        yield Sensor_1.default.deleteMany();
        const data = yield prisma_1.prisma.sensor.findMany();
        const seedData = data.map((item) => {
            var _a, _b, _c;
            return ({
                sensorId: item.id,
                nama: item.name,
                greenhouseId: (_a = item.greenhouseId) !== null && _a !== void 0 ? _a : undefined,
                tandonId: (_b = item.tandonId) !== null && _b !== void 0 ? _b : undefined,
                tandonBahanId: (_c = item.tandonBahanId) !== null && _c !== void 0 ? _c : undefined,
            });
        });
        yield Sensor_1.default.insertMany(seedData, { ordered: false });
    }
    catch (error) {
    }
    finally {
        mongoose_1.default.disconnect();
    }
});
seedData();
