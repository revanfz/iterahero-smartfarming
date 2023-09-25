"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRoute = void 0;
const dashboard_1 = require("../controllers/dashboard");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/dashboard`;
exports.dashboardRoute = [
    {
        method: "GET",
        path,
        handler: dashboard_1.getHandler,
    }
];
