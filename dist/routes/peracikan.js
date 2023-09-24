"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.peracikanRoute = void 0;
const peracikan_1 = require("../controllers/peracikan");
const joi_1 = __importDefault(require("joi"));
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/peracikan`;
const postValidator = joi_1.default.object({
    id_greenhouse: joi_1.default.number().required(),
    ppm: joi_1.default.number().required(),
    ph: joi_1.default.number().required(),
    nama: joi_1.default.string().optional()
});
exports.peracikanRoute = [
    {
        method: "GET",
        path,
        handler: peracikan_1.getHandler,
        options: {
            validate: {
                query: joi_1.default.object({
                    id_greenhouse: joi_1.default.number().required()
                })
            },
        },
    },
    {
        method: "POST",
        path,
        handler: peracikan_1.postHandler,
        options: {
            validate: {
                payload: postValidator
            }
        }
    }
];
