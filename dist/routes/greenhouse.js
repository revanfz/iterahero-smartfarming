"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greenhouseRoute = void 0;
const greenhouse_1 = require("../controllers/greenhouse");
const prefix_1 = require("../utils/prefix");
const joi_1 = __importDefault(require("joi"));
const path = `${prefix_1.prefix}/greenhouse`;
exports.greenhouseRoute = [
    {
        method: "GET",
        path,
        handler: greenhouse_1.getHandler,
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
                    output: "stream",
                },
                maxBytes: 1000 * 1000 * 5, // 5 Mb
            },
        },
    },
    {
        method: "GET",
        path: path + "/{id}/sensor",
        handler: greenhouse_1.sensorByGreenhouseHandler,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.number().required(),
                }),
            },
        },
    },
    {
        method: "GET",
        path: path + "/{id}/actuator",
        handler: greenhouse_1.actuatorByGreenhouseHandler,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.number().required(),
                }),
            },
        },
    },
];
