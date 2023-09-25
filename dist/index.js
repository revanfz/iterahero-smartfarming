"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const mqtt_1 = require("./config/mqtt");
(0, server_1.init)().then(() => {
    (0, server_1.start)();
    (0, mqtt_1.connectMqtt)();
});
