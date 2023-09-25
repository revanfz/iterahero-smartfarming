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
exports.peracikanRoute = [
    {
        method: "POST",
        path,
        handler: peracikan_1.postHandler,
        options: {
            validate: {
                payload: joi_1.default.object({
                    nama: joi_1.default.string().required()
                })
            }
        }
    }
];
