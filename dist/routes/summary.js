"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryRoute = void 0;
const prefix_1 = require("../utils/prefix");
const summary_1 = require("../controllers/summary");
const path = `${prefix_1.prefix}/summary`;
exports.summaryRoute = [
    {
        method: "GET",
        path,
        handler: summary_1.getHandler
    },
    {
        method: "GET",
        path: `${prefix_1.prefix}/download/summary`,
        handler: summary_1.downloadHandler
    }
];
