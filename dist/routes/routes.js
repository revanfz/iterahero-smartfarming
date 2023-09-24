"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_1 = require("./home");
const login_1 = require("./login");
const peracikan_1 = require("./peracikan");
const register_1 = require("./register");
const penjadwalan_1 = require("./penjadwalan");
exports.routes = [
    ...home_1.home,
    ...login_1.loginRoute,
    ...peracikan_1.peracikanRoute,
    ...penjadwalan_1.penjadwalanRoute,
    ...register_1.registerRoute
];
