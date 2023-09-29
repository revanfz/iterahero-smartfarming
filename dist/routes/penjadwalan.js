"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.penjadwalanRoute = void 0;
const penjadwalan_1 = require("../controllers/penjadwalan");
const prefix_1 = require("../utils/prefix");
const joi_1 = __importDefault(require("joi"));
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
    },
    {
        method: "PATCH",
        path,
        handler: penjadwalan_1.patchHandler,
        options: {
            validate: {
                query: joi_1.default.object({
                    id: joi_1.default.number()
                })
            }
        }
    }
];
