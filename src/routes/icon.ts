import { ServerRoute } from "@hapi/hapi";
import { getHandler } from "../controllers/category";
import { prefix } from "../utils/prefix";

const path = `${prefix}/category`

export const iconRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]