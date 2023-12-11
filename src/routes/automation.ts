import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { deleteHandler, getHandler, patchHandler, postHandler, putHandler } from "../controllers/automation";

const path = `${prefix}/automation`

export const automationRoute: ServerRoute[] = [
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
    },
    {
        method: "DELETE",
        path,
        handler: deleteHandler
    },
    {
        method: "PUT",
        path,
        handler: putHandler
    }
]