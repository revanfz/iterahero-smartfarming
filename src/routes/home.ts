import { ServerRoute } from "@hapi/hapi";
import { getHandler } from "../controllers/home";

export const home: ServerRoute[] = [
    {
        method: "GET",
        path:  "/{path*}",
        options: {
            auth: false,
            tags: ['api'],
        },
        handler: getHandler
    }
]