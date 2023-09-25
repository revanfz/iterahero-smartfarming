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
const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;
let broker;
function connectMqtt() {
    broker = mqtt.connect("ws://broker.hivemq.com:8000/mqtt", {
        clientId,
        keepalive: 30,
        protocolId: "MQTT",
        protocolVersion: 4,
        clean: true,
        connectTimeout: 30 * 1000,
        rejectUnauthorized: false,
        reconnectPeriod: 1000,
    });
    broker.on("connect", () => {
        console.log("Connected to MQTT");
        broker.subscribe("iterahero/dashboard");
    });
    broker.on("message", (topic, payload, packet) => {
        const data = JSON.parse(payload.toString());
        console.log(data);
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
// export default mqttClient;
