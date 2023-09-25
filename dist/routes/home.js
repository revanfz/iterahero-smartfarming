"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const home_1 = require("../controllers/home");
exports.home = [
    {
        method: "GET",
        path: "/{path*}",
        options: {
            auth: false
        },
        handler: home_1.getHandler
    }
];
