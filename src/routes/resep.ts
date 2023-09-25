import { ServerRoute } from "@hapi/hapi";
import { getHandler, postHandler } from "../controllers/resep";
import Joi from 'joi'
import { prefix } from "../utils/prefix";

const path = `${prefix}/resep`;

const postValidator = Joi.object({
    ppm: Joi.number().required(),
    ph: Joi.number().required(),
    nama: Joi.string().required()
})

export const resepRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler,
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