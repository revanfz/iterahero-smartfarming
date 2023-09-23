"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = void 0;
const getHandler = (request, h) => {
    console.log("Processing request", request.info.id);
    return "Hello! Nice to meet you.";
};
exports.getHandler = getHandler;
