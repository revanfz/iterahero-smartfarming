"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingRoute = void 0;
const prefix_1 = require("../utils/prefix");
const logging_1 = require("../controllers/logging");
const path = `${prefix_1.prefix}/logging`;
exports.loggingRoute = [
    {
        method: "GET",
        path,
        handler: logging_1.getHandler
    }
];
