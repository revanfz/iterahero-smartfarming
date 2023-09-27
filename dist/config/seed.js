"use strict";
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
const prisma_1 = require("./prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield prisma_1.prisma.user.upsert({
            where: {
                email: "iterahero2022@gmail.com"
            },
            update: {},
            create: {
                email: "iterahero2022@gmail.com",
                username: "iterahero",
                password: yield bcrypt_1.default.hash("iterahero2022", 10),
                role: "admin"
            }
        });
        const operator = yield prisma_1.prisma.user.upsert({
            where: {
                email: "mitraiterahero@gmail.com"
            },
            update: {},
            create: {
                email: "mitraiterahero@gmail.com",
                username: "mitraiterahero",
                password: yield bcrypt_1.default.hash("mitraiterahero", 10),
                role: "operator"
            }
        });
        const resep = yield prisma_1.prisma.resep.create({
            data: {
                nama: "melon",
                ppm: 1000,
                ph: 7.2
            }
        });
        const tandon = yield prisma_1.prisma.tandon.create({
            data: {
                nama: "Tandon Peracikan",
                userId: 1,
                isOnline: true,
                status: "Idle"
            }
        });
        const tandonBahan = yield prisma_1.prisma.tandonBahan.createMany({
            data: [
                {
                    nama: "Nutrisi A",
                    tandonId: 1,
                },
                {
                    nama: "Nutrisi B",
                    tandonId: 1,
                },
                {
                    nama: "Air",
                    tandonId: 1,
                },
                {
                    nama: "Asam",
                    tandonId: 1
                },
                {
                    nama: "Basa",
                    tandonId: 1
                }
            ]
        });
        const sensor = yield prisma_1.prisma.sensor.createMany({
            data: [
                {
                    nama: "Sensor Ketinggian",
                    merek: "Adidas",
                    satuan: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 1,
                    nilai: 10,
                },
                {
                    nama: "Sensor Ketinggian",
                    merek: "Nike",
                    satuan: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 2,
                    nilai: 20,
                },
                {
                    nama: "Sensor Ketinggian",
                    merek: "Wkwkwk",
                    satuan: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 3,
                    nilai: 30,
                },
                {
                    nama: "Sensor Ketinggian",
                    merek: "Asus",
                    satuan: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 4,
                    nilai: 7,
                },
                {
                    nama: "Sensor Ketinggian",
                    merek: "Toshiba",
                    satuan: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 5,
                    nilai: 11,
                }
            ]
        });
        console.log({ admin, operator, resep, tandon, tandonBahan, sensor });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma_1.prisma.$disconnect();
    process.exit(1);
}));
