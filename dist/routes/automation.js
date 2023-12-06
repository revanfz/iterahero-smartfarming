"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automationRoute = void 0;
const prefix_1 = require("../utils/prefix");
const automation_1 = require("../controllers/automation");
const path = `${prefix_1.prefix}/automation`;
exports.automationRoute = [
    {
        method: "GET",
        path,
        handler: automation_1.getHandler
    },
    {
        method: "POST",
        path,
        handler: automation_1.postHandler
    },
    {
        method: "PATCH",
        path,
        handler: automation_1.patchHandler
    },
    {
        method: "DELETE",
        path,
        handler: automation_1.deleteHandler
    }
];
