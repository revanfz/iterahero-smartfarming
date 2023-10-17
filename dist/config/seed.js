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
                            id: 1
                        },
                        create: {
                            name: "Greenhouse Kebun Raya",
                            thumbnail: "https://res.cloudinary.com/iterahero2023/image/upload/v1696756417/iterahero2023/gh-kebun%20raya.jpg",
                            location: "UPT Kebun Raya"
                        }
                    }
                }
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
                            id: 2
                        },
                        create: {
                            name: "Greenhouse Wanayasa",
                            thumbnail: "",
                            location: "Wanayasa"
                        }
                    }
                }
            },
        });
        const tandon = yield prisma_1.prisma.tandon.createMany({
            data: [
                {
                    nama: "Tandon Peracikan - Kebun Raya",
                    userId: 1,
                    isOnline: true,
                    status: "Menyiram",
                },
                {
                    nama: "Tandon Peracikan - Mitra",
                    userId: 2,
                    isOnline: true,
                    status: "Idle",
                },
            ],
        });
        const tandonPenyimpanan = yield prisma_1.prisma.tandonPenyimpanan.createMany({
            data: [
                {
                    nama: "Melon",
                    distributable: true,
                    tandonId: 2,
                },
                {
                    nama: "Semangka",
                    distributable: false,
                    tandonId: 2,
                },
                {
                    nama: "Ketimun",
                    distributable: false,
                    tandonId: 2,
                }
            ]
        });
        const selenoid = yield prisma_1.prisma.aktuator.create({
            data: {
                name: "Selenoid Melon",
                color: "red",
                icon: "",
                merek: "Endress-Hauser",
                portPlc: 1,
                status: true,
            }
        });
        const resep = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Melon",
                ppm: 1000,
                ph: 7.2,
                interval: 120,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Melon"
                    }
                }
            }
        });
        const resep2 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Semangka",
                ppm: 1200,
                ph: 6.4,
                interval: 95,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Semangka"
                    }
                }
            }
        });
        const resep3 = yield prisma_1.prisma.resep.create({
            data: {
                nama: "Ketimun",
                ppm: 900,
                ph: 6.6,
                interval: 105,
                tandonPenyimpanan: {
                    connect: {
                        nama: "Ketimun"
                    }
                }
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
                    tandonId: 1,
                },
                {
                    nama: "Basa",
                    tandonId: 1,
                },
                {
                    nama: "Nutrisi A",
                    tandonId: 2,
                },
                {
                    nama: "Nutrisi B",
                    tandonId: 2,
                },
                {
                    nama: "Air",
                    tandonId: 2,
                },
                {
                    nama: "Asam",
                    tandonId: 2,
                },
                {
                    nama: "Basa",
                    tandonId: 2,
                },
            ],
        });
        const sensor = yield prisma_1.prisma.sensor.createMany({
            data: [
                {
                    name: "Sensor Ketinggian",
                    brand: "Adidas",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 1,
                    nilai: 10,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Nike",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 2,
                    nilai: 20,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Wkwkwk",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 3,
                    nilai: 30,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Asus",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 4,
                    nilai: 7,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Toshiba",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 5,
                    nilai: 11,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor pH",
                    brand: "Endreess-Hauser",
                    unit_measurement: "pH",
                    persamaan: "e = mc^2",
                    status: true,
                    tandonId: 1,
                    nilai: 6.2,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Suhu",
                    brand: "Allianz",
                    unit_measurement: "Kelvin",
                    persamaan: "y = ax^2 + bx + c",
                    status: true,
                    tandonId: 1,
                    nilai: 299.15,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor TDS",
                    brand: "Carlsberg",
                    unit_measurement: "PPM",
                    persamaan: " 1/ D * Inv (x)",
                    status: true,
                    tandonId: 1,
                    nilai: 1200,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Adidas",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 6,
                    nilai: 10,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Nike",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 7,
                    nilai: 20,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Wkwkwk",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 8,
                    nilai: 30,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Asus",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 9,
                    nilai: 7,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Ketinggian",
                    brand: "Toshiba",
                    unit_measurement: "m",
                    persamaan: "y = mx + b",
                    status: true,
                    tandonBahanId: 10,
                    nilai: 11,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor pH",
                    brand: "Endreess-Hauser",
                    unit_measurement: "pH",
                    persamaan: "e = mc^2",
                    status: true,
                    tandonId: 2,
                    nilai: 6.2,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor Suhu",
                    brand: "Allianz",
                    unit_measurement: "Kelvin",
                    persamaan: "y = ax^2 + bx + c",
                    status: true,
                    tandonId: 2,
                    nilai: 299.15,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
                {
                    name: "Sensor TDS",
                    brand: "Carlsberg",
                    unit_measurement: "PPM",
                    persamaan: " 1/ D * Inv (x)",
                    status: true,
                    tandonId: 2,
                    nilai: 1200,
                    icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1666445910/itera%20herro%20icon/Icon%20fix/Monitoring/ph_ykaxmx.png"
                },
            ],
        });
        console.log({ admin, operator, tandonPenyimpanan, resep, resep2, resep3, tandon, tandonBahan, sensor });
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
