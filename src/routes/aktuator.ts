import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler, patchHandler, postHandler } from "../controllers/aktuator";

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
    }
]