"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_1 = require("./home");
const login_1 = require("./login");
const resep_1 = require("./resep");
const register_1 = require("./register");
const penjadwalan_1 = require("./penjadwalan");
const peracikan_1 = require("./peracikan");
const bahan_1 = require("./bahan");
const tandonUtama_1 = require("./tandonUtama");
const dashboard_1 = require("./dashboard");
const greenhouse_1 = require("./greenhouse");
const aktuator_1 = require("./aktuator");
const sensor_1 = require("./sensor");
const kontrol_1 = require("./kontrol");
const notification_1 = require("./notification");
const logging_1 = require("./logging");
const icon_1 = require("./icon");
const grafik_1 = require("./grafik");
exports.routes = [
    ...home_1.home,
    ...login_1.loginRoute,
    ...resep_1.resepRoute,
    ...penjadwalan_1.penjadwalanRoute,
    ...register_1.registerRoute,
    ...peracikan_1.peracikanRoute,
    ...bahan_1.bahanRoute,
    ...tandonUtama_1.tandonUtamaRoute,
    ...dashboard_1.dashboardRoute,
    ...greenhouse_1.greenhouseRoute,
    ...aktuator_1.aktuatorRoute,
    ...sensor_1.sensorRoute,
    ...kontrol_1.kontrolRoute,
    ...notification_1.notificationRoute,
    ...logging_1.loggingRoute,
    ...icon_1.iconRoute,
    ...grafik_1.grafikRoute
];
