import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler } from "../controllers/aktuator";

const path = `${prefix}/aktuator`

export const aktuatorRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]