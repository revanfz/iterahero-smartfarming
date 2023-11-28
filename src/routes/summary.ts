import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler, downloadHandler } from "../controllers/summary";

const path = `${prefix}/summary`

export const summaryRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "GET",
        path: `${prefix}/download/summary`,
        handler: downloadHandler
    }
]