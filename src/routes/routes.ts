import { ServerRoute } from "@hapi/hapi";
import { home } from "./home";
import { login } from "./login";

export const routes: ServerRoute[] = [...home, ...login];