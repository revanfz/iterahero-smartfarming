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
    exports.broker = mqtt.connect("mqtt://broker.emqx.io:1883", {
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
        var _a, _b;
        try {
            const data = JSON.parse(payload.toString());
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
                        const reason = [];
                        for (const item in data.sensor) {
                            const gpio = parseInt(data.sensor[item]);
                            const sensor = yield prisma_1.prisma.sensor.findFirst({
                                where: {
                                    GPIO: gpio,
                                    microcontroller: {
                                        name: target.name,
                                    },
                                },
                            });
                            reason.push(`${sensor === null || sensor === void 0 ? void 0 : sensor.name}`);
                        }
                        yield prisma_1.prisma.notification.create({
                            data: {
                                header: `Peracikan ${tandon === null || tandon === void 0 ? void 0 : tandon.nama} dihentikan`,
                                message: `Peracikan ${tandon === null || tandon === void 0 ? void 0 : tandon.nama} dihentikan karena ${reason.join(", ")} bermasalah`,
                                userId: tandon.userId,
                                loc: tandon.nama + "," + tandon.location,
                            },
                        });
                    }
                }
            }
            if (topic.match("iterahero2023/mikrokontroller/status")) {
                const target = yield prisma_1.prisma.microcontroller.findUnique({
                    where: {
                        name: data.mikrokontroler,
                    },
                    include: {
                        tandon: true,
                    },
                });
                if (target) {
                    yield prisma_1.prisma.microcontroller.update({
                        where: {
                            id: target.id,
                        },
                        data: {
                            status: Boolean(data.status),
                        },
                    });
                    yield prisma_1.prisma.tandon.update({
                        where: {
                            id: (_a = target.tandon) === null || _a === void 0 ? void 0 : _a.id,
                        },
                        data: {
                            isOnline: Boolean(data.status),
                        },
                    });
                }
                if (target === null || target === void 0 ? void 0 : target.updated_at) {
                    const update_time = new Date(target.updated_at);
                    const now = new Date();
                    const timeDiff = (now.getTime() - update_time.getTime()) / (1000 * 60);
                    if (timeDiff > 5) {
                        publishData("iterahero2023/tandon/volume", JSON.stringify({
                            mikrokontroler: target.name,
                            volume: (_b = target.tandon) === null || _b === void 0 ? void 0 : _b.volume,
                        }), target.id)
                            .then(() => {
                            console.log("Volume berhasil diupdate");
                        })
                            .catch((e) => {
                            console.log("Volume gagal diupdate");
                        });
                    }
                }
            }
            if (topic === "iterahero2023/peracikan/info") {
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
                        volume: data.volume,
                    },
                });
            }
            if (topic === "iterahero2023/info/sensor") {
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
                    const aktuator = yield prisma_1.prisma.aktuator.findMany({
                        where: {
                            GPIO: parseInt(pin),
                        },
                    });
                    aktuator.forEach((item, idx) => __awaiter(this, void 0, void 0, function* () {
                        yield AktuatorLog_1.default.create({
                            id_aktuator: item.id,
                            message: `${item.name} ${isActive ? "menyala" : "dimatikan"}`,
                        });
                    }));
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
