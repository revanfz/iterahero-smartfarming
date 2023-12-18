"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconRoute = void 0;
const category_1 = require("../controllers/category");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/category`;
exports.iconRoute = [
    {
        method: "GET",
        path,
        handler: category_1.getHandler
    }
];
