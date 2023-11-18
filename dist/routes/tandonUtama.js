"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tandonUtamaRoute = void 0;
const tandonUtama_1 = require("../controllers/tandonUtama");
const prefix_1 = require("../utils/prefix");
const joi_1 = __importDefault(require("joi"));
const path = `${prefix_1.prefix}/tandonUtama`;
exports.tandonUtamaRoute = [
    {
        method: "GET",
        path,
        handler: tandonUtama_1.getHandler,
        options: {
            tags: ["api"],
            validate: {
                query: joi_1.default.object({
                    id: joi_1.default.number().required().optional(),
                }),
            },
        },
    },
    {
        method: "GET",
        path: path + "/{id}/sensor",
        handler: tandonUtama_1.sensorByTandonHandler,
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
        handler: tandonUtama_1.actuatorByTandonHandler,
        options: {
            validate: {
                params: joi_1.default.object({
                    id: joi_1.default.number().required(),
                }),
            },
        },
    },
    {
        method: "PATCH",
        path,
        handler: tandonUtama_1.patchHandler
    },
];
