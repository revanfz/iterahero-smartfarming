import { ServerRoute } from "@hapi/hapi";
import { home } from "./home";
import { loginRoute } from "./login";
import { resepRoute } from "./resep";
import { registerRoute } from "./register";
import { penjadwalanRoute } from "./penjadwalan";
import { peracikanRoute } from "./peracikan";
import { bahanRoute } from "./bahan";
import { tandonUtamaRoute } from "./tandonUtama";
import { dashboardRoute } from "./dashboard";
import { greenhouseRoute } from "./greenhouse";
import { aktuatorRoute } from "./aktuator";
import { sensorRoute } from "./sensor";
import { kontrolRoute } from "./kontrol";

export const routes: ServerRoute[] = [
  ...home,
  ...loginRoute,
  ...resepRoute,
  ...penjadwalanRoute,
  ...registerRoute,
  ...peracikanRoute,
  ...bahanRoute,
  ...tandonUtamaRoute,
  ...dashboardRoute,
  ...greenhouseRoute,
  ...aktuatorRoute,
  ...sensorRoute,
  ...kontrolRoute
];
