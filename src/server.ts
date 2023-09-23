'use strict';

import { Server } from "@hapi/hapi";
import "dotenv/config";
import { routes } from "./routes/routes";


let server: Server;

export const init = async function(): Promise<Server> {
    server = new Server({
        port: process.env.PORT || 3000,
        host: process.env.host || "localhost"
    });

    server.route(routes)
    return server;
}

export const start = async function(): Promise<void> {
    console.log(`Listening on http://${server.settings.host}:${server.settings.port}`)
    return server.start();
}

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});