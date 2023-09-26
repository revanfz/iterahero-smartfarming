"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bahanRoute = void 0;
const prefix_1 = require("../utils/prefix");
const bahan_1 = require("../controllers/bahan");
const path = `${prefix_1.prefix}/bahan`;
exports.bahanRoute = [
    {
        method: "GET",
        path,
        handler: bahan_1.getHandler
    }
];
