import { postHandler, cancelPeracikanHandler } from "../controllers/peracikan";
import { prefix } from "../utils/prefix";
import { ServerRoute } from "@hapi/hapi";

const path = `${prefix}/peracikan`

export const peracikanRoute: ServerRoute[] = [
    {
        method: "POST",
        path,
        handler: postHandler,
    },
    {
        method: "POST",
        path: `${path}/batal`,
        handler: cancelPeracikanHandler,
    }
]