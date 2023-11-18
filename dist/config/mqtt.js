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
exports.publishData = exports.connectMqtt = void 0;
const mqtt = __importStar(require("mqtt"));
require("dotenv/config");
const prisma_1 = require("./prisma");
const Sensor_1 = __importDefault(require("../models/Sensor"));
const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;
let broker;
function connectMqtt() {
    broker = mqtt.connect({
        host: "c401972c13f24e59b71daf85c5f5a712.s2.eu.hivemq.cloud",
        port: 8883,
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
        protocol: "mqtts",
        clientId
    });
    broker.on("connect", () => {
        console.log("Connected to MQTT");
        broker.subscribe("iterahero2023/#");
    });
    broker.on("message", (topic, payload, packet) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = JSON.parse(payload.toString());
            console.log(data);
            if (topic === "iterahero2023/peracikan/info") {
                yield prisma_1.prisma.tandon.update({
                    where: {
                        id: 2
                    },
                    data: {
                        status: data.status
                    }
                });
            }
            else if (topic === "iterahero2023/info") {
                data.sensor.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                    const id = Object.keys(item)[0];
                    const val = Object.values(item)[0];
                    yield Sensor_1.default.findOneAndUpdate({ sensorId: parseInt(id) }, { nilai: val });
                }));
                data.actuator.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                    console.log(item);
                }));
            }
            else if (topic === "iterahero2023/actuator") {
                data.actuator.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                    const id = Object.keys(item)[0];
                    const status = Object.values(item)[0];
                    yield prisma_1.prisma.aktuator.update({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            status
                        }
                    });
                }));
            }
        }
        catch (e) {
            if (e instanceof Error)
                console.log(e.message);
        }
    }));
}
exports.connectMqtt = connectMqtt;
function publishData(topic, message) {
    if (broker) {
        broker.publish(topic, message);
    }
    else {
        console.error("MQTT is not connected");
    }
}
exports.publishData = publishData;
process.on('SIGINT', () => {
    broker.end();
});
