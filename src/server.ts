"use strict";

import * as JWT from "@hapi/jwt";
import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import * as Qs from "qs";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
import { Server, AuthArtifacts, Request, ResponseToolkit } from "@hapi/hapi";
import { routes } from "./routes/routes";
import { userAuthorization } from "./middleware/roleAuth";

let server: Server;

export const init = async function (): Promise<Server> {
  server = new Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
    query: {
      parser: (query) => Qs.parse(query),
    },
    routes: {
      cors: {
        origin: ["*"],
      }
    },
  });
  
const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: "Test API Documentation"
  }
}

const plugins = [
  {
    plugin: JWT
  },
  {
    plugin: Inert,
  }, {
    plugin: Vision
  }, {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
]

  await server.register(
    plugins
  );

  server.route(routes);

  server.auth.strategy("jwt", "jwt", {
    keys: process.env.JWT_SECRET,
    verify: {
      aud: process.env.JWT_AUD,
      iss: process.env.JWT_ISS,
      sub: process.env.JWT_SUB,
      nbf: true,
      exp: true,
      maxAgeSec: 60 * 60 * 24 * 3,
      timeSkewSec: 20,
    },
    validate: (
      artifacts: AuthArtifacts,
      request: Request,
      h: ResponseToolkit
    ) => {
      const token = artifacts.token as string;
      const { exp } = jwt.decode(token) as {
        exp: number
      };
      if (exp > Date.now() / 1000 && jwt.verify(token, process.env.JWT_SECRET as string)) {
        return {
            isValid: true,
            credentials: jwt.verify(token, process.env.JWT_SECRET as string)
        }
      } else {
        return {
          isValid: false
        }
      }
    }
  });

  server.auth.default("jwt");

  server.ext('onPreHandler', userAuthorization);

  return server;
};

export const start = async function (): Promise<void> {
  console.log(
    `Listening on http://${server.settings.host}:${server.settings.port}`
  );
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("Stopping server");

  server.stop({ timeout: 1000 }).then(() => process.exit(1));
})