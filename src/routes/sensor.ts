import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { deleteHandler, getHandler, patchHandler, postHandler } from "../controllers/sensor";

const path = `${prefix}/sensor`

export const sensorRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "PUT",
        path,
        handler: patchHandler
    },
    {
        method: "DELETE",
        path,
        handler: deleteHandler
    },
    {
        method: "POST",
        path,
        handler: postHandler
    }
]