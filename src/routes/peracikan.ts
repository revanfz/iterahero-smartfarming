import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler } from "../controllers/peracikan";
import Joi from 'joi'
import { prefix } from "../utils/prefix";

const path = `${prefix}/peracikan`;

const postValidator = Joi.object({
    id_greenhouse: Joi.number().required(),
    ppm: Joi.number().required(),
    ph: Joi.number().required(),
    nama: Joi.string().optional()
})

export const peracikanRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler,
        options: {
            validate: {
                query: Joi.object({
                    id_greenhouse: Joi.number().required()
                })
            },
        },
    },
    {
        method: "POST",
        path,
        handler: postHandler,
        options: {
            validate: {
                payload: postValidator
            }
        }
    }
]