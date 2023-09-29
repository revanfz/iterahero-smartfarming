import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler, deleteHandler, patchHandler } from "../controllers/penjadwalan";
import { prefix } from "../utils/prefix";
import Joi from "joi";

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
        handler: deleteHandler,
        options: {
            validate: {
                query: Joi.object({
                    id: Joi.number().required()
                })
            }
        }
    },
    {
        method: "PATCH",
        path,
        handler: patchHandler,
        options: {
            validate: {
                query: Joi.object({
                    id: Joi.number()
                })
            }
        }
    }
]