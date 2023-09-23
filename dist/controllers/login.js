"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = void 0;
const postHandler = (request, h) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200);
};
exports.postHandler = postHandler;
