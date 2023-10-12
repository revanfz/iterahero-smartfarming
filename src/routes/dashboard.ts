import { getHandler } from "../controllers/dashboard";
import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";

const path = `${prefix}/dashboard`

export const dashboardRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler,
    },
];