import { getHandler, postHandler } from "../controllers/greenhouse";
import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";

const path = `${prefix}/greenhouse`

export const greenhouseRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    },
    {
        method: "POST",
        path,
        handler: postHandler,
        options: {
            payload: {
                parse: true,
                allow: "multipart/form-data",
                multipart: {
                    output: "stream"
                },
                maxBytes: 1000 * 1000 * 5 // 5 Mb
            },
        }
    }
]