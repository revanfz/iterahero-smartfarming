"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kontrolRoute = void 0;
const kontrol_1 = require("../controllers/kontrol");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/kontrol`;
exports.kontrolRoute = [
    {
        method: "POST",
        handler: kontrol_1.postHandler,
        path
    }
];
