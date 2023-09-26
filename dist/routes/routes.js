"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_1 = require("./home");
const login_1 = require("./login");
const resep_1 = require("./resep");
const register_1 = require("./register");
const penjadwalan_1 = require("./penjadwalan");
const peracikan_1 = require("./peracikan");
const bahan_1 = require("./bahan");
exports.routes = [
    ...home_1.home,
    ...login_1.loginRoute,
    ...resep_1.resepRoute,
    ...penjadwalan_1.penjadwalanRoute,
    ...register_1.registerRoute,
    ...peracikan_1.peracikanRoute,
    ...bahan_1.bahanRoute
];
