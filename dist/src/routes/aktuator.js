"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aktuatorRoute = void 0;
const prefix_1 = require("../utils/prefix");
const aktuator_1 = require("../controllers/aktuator");
const path = `${prefix_1.prefix}/aktuator`;
exports.aktuatorRoute = [
    {
        method: "GET",
        path,
        handler: aktuator_1.getHandler
    }
];
