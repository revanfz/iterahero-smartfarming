"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peracikanRoute = void 0;
const peracikan_1 = require("../controllers/peracikan");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/peracikan`;
exports.peracikanRoute = [
    {
        method: "POST",
        path,
        handler: peracikan_1.postHandler,
    },
    {
        method: "POST",
        path: `${path}/batal`,
        handler: peracikan_1.cancelPeracikanHandler,
    }
];
