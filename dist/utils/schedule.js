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
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulePeracikan = void 0;
const schedule = __importStar(require("node-schedule"));
const mqtt_1 = require("../config/mqtt");
const schedulePeracikan = (jam) => {
    const mappedTime = jam.map((item) => {
        const waktu = item.split(":");
        return { hour: parseInt(waktu[0]), minute: parseInt(waktu[1]) };
    });
    console.log(mappedTime);
    mappedTime.forEach((waktu) => {
        const rule = new schedule.RecurrenceRule();
        rule.hour = waktu.hour;
        rule.minute = waktu.minute;
        schedule.scheduleJob(rule, () => {
            console.log(`Schedule ${waktu.hour}:${waktu.minute}`);
            (0, mqtt_1.publishData)("iterahero2023/peracikan", JSON.stringify({
                peracikan: true,
            }));
        });
    });
};
exports.schedulePeracikan = schedulePeracikan;
