"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greenhouseRoute = void 0;
const greenhouse_1 = require("../controllers/greenhouse");
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/greenhouse`;
exports.greenhouseRoute = [
    {
        method: "GET",
        path,
        handler: greenhouse_1.getHandler
    },
    {
        method: "POST",
        path,
        handler: greenhouse_1.postHandler,
        options: {
            payload: {
                parse: true,
                allow: "multipart/form-data",
                multipart: {
                    output: "stream"
                },
                maxBytes: 1000 * 1000 * 5 // 5 Mb
            },
        }
    }
];
