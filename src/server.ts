"use strict";

import * as JWT from "@hapi/jwt";
import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import "dotenv/config";
import { Server, AuthArtifacts, Request, ResponseToolkit } from "@hapi/hapi";
import { routes } from "./routes/routes";
import { userAuthorization } from "./middleware/roleAuth";

let server: Server;

export const init = async function (): Promise<Server> {
  server = new Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
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
      maxAgeSec: 60 * 60 * 12,
      timeSkewSec: 20,
    },
    validate: (
      artifacts: AuthArtifacts,
      request: Request,
      h: ResponseToolkit
    ) => {
        return {
            isValid: true,
            credentials: artifacts.token
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
