import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getSensorHandler, getAktuatorHandler } from "../controllers/logging";

const path = `${prefix}/logging`

export const loggingRoute: ServerRoute[] = [
    {
        method: "GET",
        path: path + "/sensor",
        handler: getSensorHandler
    },
    {
        method: "GET",
        path: path + "/aktuator",
        handler: getAktuatorHandler
    }
]