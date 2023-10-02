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
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishData = exports.connectMqtt = void 0;
const mqtt = __importStar(require("mqtt"));
require("dotenv/config");
const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;
let broker;
function connectMqtt() {
    broker = mqtt.connect({
        host: "c401972c13f24e59b71daf85c5f5a712.s2.eu.hivemq.cloud",
        port: 8883,
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
        protocol: "mqtts",
        clientId,
    });
    broker.on("connect", () => {
        console.log("Connected to MQTT");
        broker.subscribe("iterahero2023/peracikan");
        broker.subscribe("iterahero2023/penjadwalan");
        broker.subscribe("iterahero2023/+/sensor");
    });
    broker.on("message", (topic, payload, packet) => {
        try {
            const data = JSON.parse(payload.toString());
            console.log(data);
        }
        catch (e) {
            if (e instanceof Error)
                console.log(e.message);
        }
    });
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
