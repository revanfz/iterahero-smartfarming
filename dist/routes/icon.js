"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconRoute = void 0;
const icon_1 = require("../controllers/icon");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/icon`;
exports.iconRoute = [
    {
        method: "GET",
        path,
        handler: icon_1.getHandler
    }
];
