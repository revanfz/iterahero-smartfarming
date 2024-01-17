import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler, patchHandler, postHandler } from "../controllers/notification";

const path = `${prefix}/notification`;

export const notificationRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "POST",
        path,
        handler: postHandler
    },
    {
        method: "PATCH",
        path,
        handler: patchHandler
    }
]