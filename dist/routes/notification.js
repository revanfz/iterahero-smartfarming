"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRoute = void 0;
const prefix_1 = require("../utils/prefix");
const notification_1 = require("../controllers/notification");
const path = `${prefix_1.prefix}/notification`;
exports.notificationRoute = [
    {
        method: "GET",
        path,
        handler: notification_1.getHandler
    },
    {
        method: "POST",
        path,
        handler: notification_1.postHandler
    }
];
