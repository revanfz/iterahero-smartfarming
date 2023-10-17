import { postHandler } from "../controllers/kontrol";
import { prefix } from "../utils/prefix";
import { ServerRoute } from "@hapi/hapi";

const path = `${prefix}/kontrol`

export const kontrolRoute: ServerRoute[] = [
    {
        method: "POST",
        handler: postHandler,
        path
    }
]