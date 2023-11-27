import { ServerRoute } from "@hapi/hapi";
import { getHandler } from "../controllers/icon";
import { prefix } from "../utils/prefix";

const path = `${prefix}/icon`

export const iconRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]