import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler, patchHandler, deleteHandler } from "../controllers/notification";

const path = `${prefix}/notification`;

export const notificationRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "PATCH",
        path,
        handler: patchHandler
    },
    {
        method: "DELETE",
        path,
        handler: deleteHandler
    }
]