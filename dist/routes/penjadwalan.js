"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.penjadwalanRoute = void 0;
const penjadwalan_1 = require("../controllers/penjadwalan");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/penjadwalan`;
exports.penjadwalanRoute = [
    {
        method: "GET",
        path,
        handler: penjadwalan_1.getHandler
    },
    {
        method: "POST",
        path,
        handler: penjadwalan_1.postHandler
    },
    {
        method: "DELETE",
        path,
        handler: penjadwalan_1.deleteHandler
    }
];
