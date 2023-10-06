"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const JWT = __importStar(require("@hapi/jwt"));
const HapiSwagger = __importStar(require("hapi-swagger"));
const Inert = __importStar(require("@hapi/inert"));
const Vision = __importStar(require("@hapi/vision"));
const Qs = __importStar(require("qs"));
const jwt = __importStar(require("jsonwebtoken"));
require("dotenv/config");
const hapi_1 = require("@hapi/hapi");
const routes_1 = require("./routes/routes");
const roleAuth_1 = require("./middleware/roleAuth");
let server;
const init = function () {
    return __awaiter(this, void 0, void 0, function* () {
        server = new hapi_1.Server({
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
        const swaggerOptions = {
            info: {
                title: "Test API Documentation"
            }
        };
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
        ];
        yield server.register(plugins);
        server.route(routes_1.routes);
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
            validate: (artifacts, request, h) => {
                const token = artifacts.token;
                const { exp } = jwt.decode(token);
                if (exp > Date.now() / 1000) {
                    return {
                        isValid: true,
                        credentials: jwt.decode(artifacts.token)
                    };
                }
                else {
                    return {
                        isValid: false
                    };
                }
            }
        });
        server.auth.default("jwt");
        server.ext('onPreHandler', roleAuth_1.userAuthorization);
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
process.on("unhandledRejection", (err) => {
    console.error(err);
    process.exit(1);
});
process.on("SIGINT", () => {
    console.log("Stopping server");
    server.stop({ timeout: 1000 }).then(() => process.exit(1));
});
