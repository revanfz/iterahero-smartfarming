"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grafikRoute = void 0;
const prefix_1 = require("../utils/prefix");
const grafik_1 = require("../controllers/grafik");
const path = `${prefix_1.prefix}/grafik`;
exports.grafikRoute = [
    {
        method: "GET",
        path,
        handler: grafik_1.getHandler
    }
];
