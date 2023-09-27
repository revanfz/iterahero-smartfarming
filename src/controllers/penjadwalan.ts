import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import { schedulePeracikan } from "../utils/schedule";

interface InputPenjadwalan {
    resep: string,
    id_tandon: number,
    waktu: string,
    iterasi: number,
    interval: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.penjadwalan.findMany();

        if (!data) {
            return Boom.notFound("Tidak ada data penjadwalan")
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
        const { resep, id_tandon, waktu, iterasi, interval } = request.payload as InputPenjadwalan;
        const waktuParsed = waktu.split(":");
        const jam = waktuParsed[0];
        const menit = waktuParsed[1];
        const isAuth = request.auth.credentials;

        if (isAuth) {
            const input = request.payload as InputPenjadwalan;
            const target = await prisma.resep.findFirst({
                where: {
                    nama: resep
                }
            })
    
            if (!target) {
                return Boom.notFound("Tidak ada resep yang sesuai")
            }
    
            for (let i = 0; i< iterasi; i++) {
                const uniqueTime = (parseInt(waktu) * interval * (i + 1)).toString();
                await prisma.penjadwalan.upsert({
                    where: {
                        waktu: uniqueTime
                    },
                    update: {},
                    create: {
                        resepId: target.id,
                        waktu: uniqueTime,
                        tandonId: input.id_tandon
                    }
                })
            }

            schedulePeracikan(isAuth.toString(), resep, parseInt(jam), parseInt(menit), iterasi, interval)
    
            return h.response({
                status: 'success',
                message: 'Penjadwalan telah dibuat'
            }).code(201);
        }
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_penjadwalan } = request.params as { id_penjadwalan: number };

        const data = await prisma.penjadwalan.delete({
            where: {
                id: id_penjadwalan
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada penjadwalan terkait")
        }

        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil dihapus'
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}