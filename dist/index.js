"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const mqtt_1 = require("./config/mqtt");
const schedule_1 = require("./utils/schedule");
const mongo_1 = __importDefault(require("./config/mongo"));
(0, server_1.init)().then(() => {
    (0, schedule_1.initPeracikan)();
    (0, mqtt_1.connectMqtt)();
    (0, server_1.start)();
    (0, mongo_1.default)().catch(err => console.error(err));
});
