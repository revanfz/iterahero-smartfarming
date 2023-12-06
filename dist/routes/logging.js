"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingRoute = void 0;
const prefix_1 = require("../utils/prefix");
const logging_1 = require("../controllers/logging");
const path = `${prefix_1.prefix}/logging`;
exports.loggingRoute = [
    {
        method: "GET",
        path: path + "/sensor",
        handler: logging_1.getSensorHandler
    },
    {
        method: "GET",
        path: path + "/aktuator",
        handler: logging_1.getAktuatorHandler
    }
];
