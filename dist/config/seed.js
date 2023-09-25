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
                userId: 1
            }
        });
        console.log({ admin, operator, resep, tandon });
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
