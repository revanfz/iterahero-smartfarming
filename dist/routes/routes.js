"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_1 = require("./home");
const login_1 = require("./login");
exports.routes = [...home_1.home, ...login_1.login];
