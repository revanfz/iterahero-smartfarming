"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greenhouseRoute = void 0;
const greenhouse_1 = require("../controllers/greenhouse");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/greenhouse`;
exports.greenhouseRoute = [
    {
        method: "GET",
        path,
        handler: greenhouse_1.getHandler
    }
];
