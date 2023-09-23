"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login_1 = require("../controllers/login");
exports.login = [
    {
        method: "POST",
        path: "/login",
        handler: login_1.postHandler
    }
];
