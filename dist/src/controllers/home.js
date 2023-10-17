"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = void 0;
const getHandler = (request, h) => {
    return h.response({
        status: "success",
        message: "Welcome to iterahero2023 API"
    });
};
exports.getHandler = getHandler;
