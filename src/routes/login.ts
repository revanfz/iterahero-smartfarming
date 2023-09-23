import { ServerRoute } from "@hapi/hapi";
import { postHandler } from "../controllers/login";

export const login: ServerRoute[] = [
    {
        method: "POST",
        path: "/login",
        handler: postHandler
    }
]