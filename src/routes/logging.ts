import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler } from "../controllers/logging";

const path = `${prefix}/logging`

export const loggingRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]