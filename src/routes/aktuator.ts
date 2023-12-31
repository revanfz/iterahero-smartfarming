import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler, patchHandler, postHandler, deleteHandler } from "../controllers/aktuator";

const path = `${prefix}/aktuator`

export const aktuatorRoute: ServerRoute[] = [
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
    }
]