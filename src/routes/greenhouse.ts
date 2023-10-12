import {
  actuatorByGreenhouseHandler,
  getHandler,
  postHandler,
  sensorByGreenhouseHandler,
} from "../controllers/greenhouse";
import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import Joi from "joi";

const path = `${prefix}/greenhouse`;

export const greenhouseRoute: ServerRoute[] = [
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
      payload: {
        parse: true,
        allow: "multipart/form-data",
        multipart: {
          output: "stream",
        },
        maxBytes: 1000 * 1000 * 5, // 5 Mb
      },
    },
  },
  {
    method: "GET",
    path: path + "/sensor",
    handler: sensorByGreenhouseHandler,
    options: {
      validate: {
        query: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: path + "/actuator",
    handler: actuatorByGreenhouseHandler,
    options: {
      validate: {
        query: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
];
