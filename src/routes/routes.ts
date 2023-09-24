import { ServerRoute } from "@hapi/hapi";
import { home } from "./home";
import { loginRoute } from "./login";
import { peracikanRoute } from "./peracikan";
import { registerRoute } from "./register";
import { penjadwalanRoute } from "./penjadwalan";

export const routes: ServerRoute[] = [
  ...home,
  ...loginRoute,
  ...peracikanRoute,
  ...penjadwalanRoute,
  ...registerRoute
];
