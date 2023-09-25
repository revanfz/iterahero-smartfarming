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
exports.schedulePeracikan = void 0;
const schedule = __importStar(require("node-schedule"));
const axios_1 = __importDefault(require("axios"));
const schedulePeracikan = (token, resep, jam, menit, iterasi, interval) => {
    let counter = 0;
    const arr = [jam];
    for (let i = 0; i < iterasi - 1; i++) {
        arr.push(jam + interval * (i + 1));
    }
    const target = arr.join(',');
    console.log(`${menit} ${target} * * *`);
    const jadwal = schedule.scheduleJob(`${menit} ${jam} * * *`, () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (counter < iterasi) {
                console.log(`Peracikan ke ${counter + 1}`);
                const peracikan = yield axios_1.default.post("/api/v1/peracikan", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                counter++;
                if (counter >= iterasi) {
                    jadwal.cancel();
                }
            }
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(e);
                jadwal.cancel();
            }
        }
    }));
};
exports.schedulePeracikan = schedulePeracikan;
