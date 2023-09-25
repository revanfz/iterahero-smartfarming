"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resepRoute = void 0;
const resep_1 = require("../controllers/resep");
const joi_1 = __importDefault(require("joi"));
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/resep`;
const postValidator = joi_1.default.object({
    ppm: joi_1.default.number().required(),
    ph: joi_1.default.number().required(),
    nama: joi_1.default.string().required()
});
exports.resepRoute = [
    {
        method: "GET",
        path,
        handler: resep_1.getHandler,
    },
    {
        method: "POST",
        path,
        handler: resep_1.postHandler,
        options: {
            validate: {
                payload: postValidator
            }
        }
    }
];
