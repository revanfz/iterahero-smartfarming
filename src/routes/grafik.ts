import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler } from "../controllers/grafik";

const path = `${prefix}/grafik`

export const grafikRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]