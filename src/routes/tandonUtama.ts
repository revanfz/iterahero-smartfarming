import { ServerRoute } from "@hapi/hapi";
import {
  actuatorByTandonHandler,
  getHandler,
  sensorByTandonHandler,
} from "../controllers/tandonUtama";
import { prefix } from "../utils/prefix";
import Joi from "joi";

const path = `${prefix}/tandonUtama`;

export const tandonUtamaRoute: ServerRoute[] = [
  {
    method: "GET",
    path,
    handler: getHandler,
    options: {
      tags: ["api"],
      validate: {
        query: Joi.object({
          id: Joi.number().required().optional(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: path + "/sensor",
    handler: sensorByTandonHandler,
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
    handler: actuatorByTandonHandler,
    options: {
      validate: {
        query: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
];
