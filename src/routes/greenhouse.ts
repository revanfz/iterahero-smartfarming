import { getHandler } from "../controllers/greenhouse";
import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";

const path = `${prefix}/greenhouse`

export const greenhouseRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]