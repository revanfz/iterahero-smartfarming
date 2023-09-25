import { postHandler } from "../controllers/peracikan";
import Joi from "joi";
import { prefix } from "../utils/prefix";
import { ServerRoute } from "@hapi/hapi";

const path = `${prefix}/peracikan`

export const peracikanRoute: ServerRoute[] = [
    {
        method: "POST",
        path,
        handler: postHandler,
        options: {
            validate: {
                payload: Joi.object({
                    nama: Joi.string().required()
                })
            }
        }
    }
]