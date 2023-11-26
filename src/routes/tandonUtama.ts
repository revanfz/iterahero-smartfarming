import { ServerRoute } from "@hapi/hapi";
import {
  actuatorByTandonHandler,
  getHandler,
  patchHandler,
  postHandler,
  sensorByTandonHandler,
  deleteHandler
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
    path: path + "/{id}/sensor",
    handler: sensorByTandonHandler,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: path + "/{id}/actuator",
    handler: actuatorByTandonHandler,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
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
    method: "PATCH",
    path,
    handler: patchHandler,
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
    method: "DELETE",
    path,
    handler: deleteHandler,
  },
];
