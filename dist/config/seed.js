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
const aktuator_1 = require("../data/aktuator");
const sensor_1 = require("../data/sensor");
const tandonBahan_1 = require("../data/tandonBahan");
const tandonPenyimpanan_1 = require("../data/tandonPenyimpanan");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("./prisma");
const tandon_1 = require("../data/tandon");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield prisma_1.prisma.user.upsert({
            where: {
                email: "iterahero2022@gmail.com",
            },
            update: {},
            create: {
                email: "iterahero2022@gmail.com",
                username: "iterahero",
                password: yield bcrypt_1.default.hash("iterahero2022", 10),
                role: "admin",
                greenhouse: {
                    connectOrCreate: {
                        where: {
                            id: 1,
                        },
                        create: {
                            name: "Greenhouse Kebun Raya",
                            thumbnail: "https://res.cloudinary.com/iterahero2023/image/upload/v1696756417/iterahero2023/gh-kebun%20raya.jpg",
                            location: "UPT Kebun Raya",
                        },
                    },
                },
            },
        });
        const operator = yield prisma_1.prisma.user.upsert({
            where: {
                email: "mitraiterahero@gmail.com",
            },
            update: {},
            create: {
                email: "mitraiterahero@gmail.com",
                username: "mitraiterahero",
                password: yield bcrypt_1.default.hash("mitraiterahero", 10),
                role: "operator",
                greenhouse: {
                    connectOrCreate: {
                        where: {
                            id: 2,
                        },
                        create: {
                            name: "Greenhouse Wanayasa",
                            thumbnail: "https://res.cloudinary.com/iterahero2023/image/upload/v1696756417/iterahero2023/gh-kebun%20raya.jpg",
                            location: "Wanayasa",
                        },
                    },
                },
            },
        });
        const tandon = yield prisma_1.prisma.tandon.createMany({
            data: tandon_1.seedingTandon
        });
        const tandonPenyimpanan = yield prisma_1.prisma.tandonPenyimpanan.createMany({
            data: tandonPenyimpanan_1.tandonPenyimpananSeeding,
        });
        const selenoid = yield prisma_1.prisma.aktuator.createMany({
            data: aktuator_1.aktuatorSeeding,
        });
        const resep = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Melon",
                ppm: 1000,
                ph: 7.2,
                interval: 120,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Melon",
                    },
                },
                tipe: "besaran",
            },
        });
        const resep2 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Semangka",
                ppm: 1200,
                ph: 6.4,
                interval: 95,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Semangka",
                    },
                },
                tipe: "besaran",
            },
        });
        const resep3 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Ketimun",
                ppm: 900,
                ph: 6.6,
                interval: 105,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Ketimun",
                    },
                },
                tipe: "besaran",
            },
        });
        const resep4 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Melon",
                nutrisiA: 50,
                nutrisiB: 50,
                air: 3700,
                interval: 120,
                ph: 7.2,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Melon",
                    },
                },
                tipe: "rasio",
            },
        });
        const resep5 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Semangka",
                nutrisiA: 30,
                nutrisiB: 30,
                air: 2640,
                interval: 95,
                ph: 6.4,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Semangka",
                    },
                },
                tipe: "rasio",
            },
        });
        const resep6 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Ketimun",
                nutrisiA: 40,
                nutrisiB: 40,
                air: 1720,
                interval: 105,
                ph: 6.6,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Ketimun",
                    },
                },
                tipe: "rasio",
            },
        });
        const tandonBahan = yield prisma_1.prisma.tandonBahan.createMany({
            data: tandonBahan_1.tandonBahanSeeding,
        });
        const sensor = yield prisma_1.prisma.sensor.createMany({
            data: sensor_1.seedingSensor,
        });
        console.log({
            admin,
            operator,
            selenoid,
            tandonPenyimpanan,
            resep,
            resep2,
            resep3,
            resep4,
            resep5,
            resep6,
            tandon,
            tandonBahan,
            sensor,
        });
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
