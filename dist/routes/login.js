"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const login_1 = require("../controllers/login");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/login`;
exports.loginRoute = [
    {
        method: "POST",
        path,
        options: {
            auth: false
        },
        handler: login_1.postHandler
    },
    {
        method: "GET",
        path,
        options: {
            auth: false
        },
        handler: login_1.getHandler
    }
];
