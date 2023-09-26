import { ServerRoute } from "@hapi/hapi";
import { prefix } from "../utils/prefix";
import { getHandler } from "../controllers/bahan";

const path = `${prefix}/bahan`;

export const bahanRoute: ServerRoute[] = [
    {
        method: "GET",
        path,
        handler: getHandler
    }
];