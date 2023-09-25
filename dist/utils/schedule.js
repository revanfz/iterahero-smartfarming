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
const schedule = __importStar(require("node-schedule"));
const schedulePeracikan = (x) => {
    let counter = 0;
    const arr = [x.startHour];
    for (let i = 0; i < x.iterasi - 1; i++) {
        arr.push(x.startHour + x.interval);
    }
    const jam = arr.join(', ');
    console.log(schedule);
    const jadwal = schedule.scheduleJob(`* ${jam} * * *`, () => {
        if (counter < x.iterasi) {
            console.log(`Peracikan ke ${counter}`);
            counter++;
            if (counter >= x.iterasi) {
                jadwal.cancel();
            }
        }
    });
};
const input = {
    startHour: 12,
    startMinute: 0,
    interval: 2,
    iterasi: 3
};
schedulePeracikan(input);
