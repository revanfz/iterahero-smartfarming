import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler } from "../controllers/login";
import { prefix } from "../utils/prefix";

const path = `${prefix}/login`;

export const loginRoute: ServerRoute[] = [
    {
        method: "POST",
        path,
        options: {
            auth: false
        },
        handler: postHandler
    },
    {
        method: "GET",
        path,
        options: {
            auth: false
        },
        handler: getHandler

    }
]