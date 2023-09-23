import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler } from "../controllers/login";

export const login: ServerRoute[] = [
    {
        method: "POST",
        path: "/login",
        options: {
            auth: false
        },
        handler: postHandler
    },
    {
        method: "GET",
        path: "/login",
        options: {
            auth: false
        },
        handler: getHandler

    }
]