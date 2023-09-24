import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler, deleteHandler } from "../controllers/penjadwalan";
import { prefix } from "../utils/prefix";

const path = `${prefix}/penjadwalan`

export const penjadwalanRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "POST",
        path,
        handler: postHandler
    },
    {
        method: "DELETE",
        path,
        handler: deleteHandler
    }
]