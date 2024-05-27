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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishData = exports.connectMqtt = exports.broker = void 0;
const mqtt = __importStar(require("mqtt"));
require("dotenv/config");
const prisma_1 = require("./prisma");
const Sensor_1 = __importDefault(require("../models/Sensor"));
const AktuatorLog_1 = __importDefault(require("../models/AktuatorLog"));
const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;
function connectMqtt() {
    // broker = mqtt.connect({
    //   host: "c401972c13f24e59b71daf85c5f5a712.s2.eu.hivemq.cloud",
    //   port: 8883,
    //   username: process.env.MQTT_USERNAME,
    //   password: process.env.MQTT_PASSWORD,
    //   protocol: "mqtts",
    //   clientId,
    // });
    exports.broker = mqtt.connect("mqtt://broker.hivemq.com:1883", {
        protocolId: "MQTT",
        clean: true,
        clientId,
    });
    exports.broker.on("connect", () => {
        console.log("Connected to MQTT");
        exports.broker.subscribe("iterahero2023/#");
        // broker.subscribe("iterahero/#");
    });
    exports.broker.on("message", (topic, payload, packet) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = JSON.parse(payload.toString());
            if (topic === "iterahero/respon/actuator") {
            }
            if (topic.match("iterahero2023/peracikan/log")) {
                const target = yield prisma_1.prisma.microcontroller.findUnique({
                    where: {
                        name: data.mikrokontroler,
                    },
                });
                if (target) {
                    const tandon = yield prisma_1.prisma.tandon.findFirst({
                        where: {
                            microcontroller: {
                                every: {
                                    id: target.id,
                                },
                            },
                        },
                    });
                    if (data.status == "terminated" && tandon) {
                        yield publishData("iterahero2023/peracikan/cancel", JSON.stringify({
                            microcontroller: target.id,
                        }), target.id);
                        const reason = [];
                        data.aktuator.foreach((item) => __awaiter(this, void 0, void 0, function* () {
                            const aktuator = yield prisma_1.prisma.aktuator.findFirst({
                                where: {
                                    GPIO: item,
                                },
                            });
                            reason.push(`${aktuator === null || aktuator === void 0 ? void 0 : aktuator.name})`);
                            yield AktuatorLog_1.default.create({
                                id_aktuator: aktuator === null || aktuator === void 0 ? void 0 : aktuator.id,
                                message: `${aktuator === null || aktuator === void 0 ? void 0 : aktuator.name} dimatikan`,
                            });
                        }));
                        yield prisma_1.prisma.notification.create({
                            data: {
                                message: `peracikan ${tandon === null || tandon === void 0 ? void 0 : tandon.nama} dihentikan karena ${reason.join(", ")} bermasalah`,
                                userId: tandon.userId,
                                loc: tandon.nama + "," + tandon.location,
                            },
                        });
                    }
                }
            }
            if (topic === "iterahero2023/mikrokontroller/status") {
                const target = yield prisma_1.prisma.microcontroller.findUnique({
                    where: {
                        name: data.mikrokontroler,
                    },
                });
                yield prisma_1.prisma.microcontroller.update({
                    where: {
                        id: target === null || target === void 0 ? void 0 : target.id,
                    },
                    data: {
                        status: true,
                    },
                });
            }
            if (topic === "iterahero2023/peracikan/info") {
                // console.log(JSON.stringify(data));
                yield prisma_1.prisma.tandon.updateMany({
                    where: {
                        microcontroller: {
                            every: {
                                name: data.microcontrollerName,
                            },
                        },
                    },
                    data: {
                        status: data.status,
                    },
                });
            }
            if (topic === "iterahero2023/info/sensor") {
                // console.log(JSON.stringify(data));
                let microcontroller = yield prisma_1.prisma.microcontroller.findFirst({
                    where: {
                        name: data.microcontrollerName,
                    },
                });
                const listAutomasiSensor = yield prisma_1.prisma.automationSensor.findMany({
                    where: {
                        aktuator: {
                            microcontroller: {
                                name: data.microcontrollerName,
                            },
                        },
                    },
                    include: {
                        sensor: true,
                        aktuator: { include: { microcontroller: true } },
                    },
                });
                const processSensorData = (sensorData, key) => __awaiter(this, void 0, void 0, function* () {
                    const sensorField = key === "sensor_adc" ? "channel" : "GPIO";
                    sensorData.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                        const field = Object.keys(item)[0];
                        const val = Object.values(item)[0];
                        yield Sensor_1.default.updateOne({
                            [sensorField.toLowerCase()]: parseInt(field),
                            microcontrollerId: microcontroller === null || microcontroller === void 0 ? void 0 : microcontroller.id,
                        }, { $set: { nilai: val, updatedAt: new Date() } });
                        listAutomasiSensor
                            .filter((automationItem) => automationItem.sensor[sensorField] === parseInt(field))
                            .forEach((automationItem) => {
                            var _a, _b, _c;
                            const conditionMet = automationItem.condition === ">"
                                ? val > automationItem.constant
                                : val < automationItem.constant;
                            publishData("iterahero2023/kontrol", JSON.stringify({
                                pin: automationItem.aktuator.GPIO,
                                state: conditionMet ? automationItem.action : false,
                                microcontroller: (_a = automationItem.aktuator.microcontroller) === null || _a === void 0 ? void 0 : _a.name,
                            }), (_c = (_b = automationItem.aktuator.microcontroller) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : 0);
                        });
                    }));
                });
                yield processSensorData(data.sensor_adc, "sensor_adc");
                yield processSensorData(data.sensor_non_adc, "sensor_non_adc");
            }
            if (topic === "iterahero2023/info/actuator") {
                // console.log(JSON.stringify(data));
                data.actuator.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                    const pin = Object.keys(item)[0];
                    const isActive = Boolean(Object.values(item)[0]);
                    yield prisma_1.prisma.aktuator.updateMany({
                        where: {
                            GPIO: parseInt(pin),
                        },
                        data: {
                            isActive,
                        },
                    });
                }));
            }
        }
        catch (e) {
            if (e instanceof Error)
                console.log(e.message);
        }
    }));
}
exports.connectMqtt = connectMqtt;
function publishData(topic, message, microcontrollerId) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        if (!microcontrollerId) {
            reject("failed");
        }
        else {
            const microcontroller = yield prisma_1.prisma.microcontroller.findUnique({
                where: {
                    id: microcontrollerId,
                },
                select: {
                    status: true,
                },
            });
            if (!(microcontroller === null || microcontroller === void 0 ? void 0 : microcontroller.status)) {
                reject("failed");
            }
            else {
                exports.broker.publish(topic, message);
                resolve("success");
            }
        }
    }));
}
exports.publishData = publishData;
process.on("SIGINT", () => {
    exports.broker.end();
});
