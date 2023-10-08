import { ServerRoute } from "@hapi/hapi";
import Joi from 'joi'
import { prefix } from "../utils/prefix";
import { getHandler, postHandler } from "../controllers/resep";

const path = `${prefix}/resep`;

const postValidator = Joi.object({
    ppm: Joi.number().required(),
    ph: Joi.number().required(),
    nama: Joi.string().required(),
    interval: Joi.number().required()
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
            tags: ['api'],
            validate: {
                payload: postValidator,
                failAction: "error"
            }
        }
    }
]