import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom"

interface InputResep {
    nama: string,
    ppm: number,
    ph: number,
    interval: number,
    tipe: string,
    idTandonPenyimpanan: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const tipe = request.query.tipe;
        const data = await prisma.resep.findMany({
            where: {
                tipe
            }
        })

        if (data.length < 1) {
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
    await prisma.$disconnect();
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { nama, ppm, ph, interval, tipe, idTandonPenyimpanan } = request.payload as InputResep;

        await prisma.resep.create({
            data: {
                nama,
                ppm,
                ph,
                interval,
                tipe,
                tandonPenyimpanan: {
                    connect : {
                        id: idTandonPenyimpanan
                    }
                }
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
    await prisma.$disconnect();
}