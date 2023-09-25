"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoute = void 0;
const register_1 = require("../controllers/register");
const joi_1 = __importDefault(require("joi"));
const prefix_1 = require("../utils/prefix");
const path = `${prefix_1.prefix}/register`;
const registerValidator = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
});
exports.registerRoute = [
    {
        method: "POST",
        path,
        options: {
            tags: ['api'],
            validate: {
                payload: registerValidator,
            },
        },
        handler: register_1.postHandler,
    },
];
