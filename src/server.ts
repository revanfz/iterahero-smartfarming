"use strict";

import * as JWT from "@hapi/jwt";
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

  await server.register(JWT);

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
        const user = artifacts.payload;
        return {
            isValid: true,
            credentials: user
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
