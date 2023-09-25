import { ServerRoute } from "@hapi/hapi";
import { postHandler } from "../controllers/register";
import Joi from "joi";
import { prefix } from "../utils/prefix";

const path = `${prefix}/register`;

const registerValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

export const registerRoute: ServerRoute[] = [
  {
    method: "POST",
    path,
    options: {
      tags: ['api'],
      validate: {
        payload: registerValidator,
      },
    },
    handler: postHandler,
  },
];
