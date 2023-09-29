import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom"

interface InputResep {
    nama: string,
    ppm: number,
    ph: number,
    interval: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.resep.findMany();

        if (!data) {
            return Boom.notFound("Tidak ada resep tersimpan");
        }

        return h.response({
            status: 'success',
            data
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { nama, ppm, ph, interval } = request.payload as InputResep;

        await prisma.resep.create({
            data: {
                nama,
                ppm,
                ph,
                interval
            }
        });

        return h.response({
            status: 'success',
            message: `Resep ${nama} berhasil ditambahkan`
        }).code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    prisma.$disconnect();
}