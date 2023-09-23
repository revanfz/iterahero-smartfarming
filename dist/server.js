'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.init = void 0;
const hapi_1 = require("@hapi/hapi");
const routes_1 = require("./routes/routes");
let server;
const init = function () {
    return __awaiter(this, void 0, void 0, function* () {
        server = new hapi_1.Server({
            port: process.env.PORT || 3000,
            host: process.env.host || "localhost"
        });
        server.route(routes_1.routes);
        return server;
    });
};
exports.init = init;
const start = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Listening on http://${server.settings.host}:${server.settings.port}`);
        return server.start();
    });
};
exports.start = start;
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});
