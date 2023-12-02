"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensorRoute = void 0;
const prefix_1 = require("../utils/prefix");
const sensor_1 = require("../controllers/sensor");
const path = `${prefix_1.prefix}/sensor`;
exports.sensorRoute = [
    {
        method: "GET",
        path,
        handler: sensor_1.getHandler
    },
    {
        method: "PATCH",
        path,
        handler: sensor_1.patchHandler
    },
    {
        method: "DELETE",
        path,
        handler: sensor_1.deleteHandler
    },
    {
        method: "POST",
        path,
        handler: sensor_1.postHandler
    }
];
