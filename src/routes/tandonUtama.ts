import { ServerRoute } from "@hapi/hapi";
import { getHandler } from "../controllers/tandonUtama";
import { prefix } from "../utils/prefix";
import Joi from "joi";

const path = `${prefix}/tandonUtama`

export const tandonUtamaRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler,
        options: {
            tags: ['api'],
            validate: { 
                query: Joi.object({
                    id: Joi.number().required()
                })
            }
        }
    }
]