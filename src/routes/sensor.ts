import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler } from "../controllers/sensor";

const path = `${prefix}/sensor`

export const sensorRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
]