import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

interface InputPenjadwalan {
    resep?: string, 
    waktu: string[],
    interval: number,
    iterasi: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.peracikan.findMany();

        if (!data) {
            return Boom.notFound("Tidak ada data peracikan")
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
        const input = request.payload as InputPenjadwalan;
        const target = await prisma.peracikan.findFirst({
            where: {
                nama: input.resep
            }
        })

        if (!target) {
            return Boom.notFound("Tidak ada resep yang sesuai")
        }

        for (const waktu in input.waktu) {
            await prisma.penjadwalan.create({
                data: {
                    waktu,
                    peracikanId: target.id,
                }
            })
        }

        return h.response({
            status: 'success',
            message: 'Penjadwalan telah dibuat'
        }).code(201);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_penjadwalan } = request.payload as { id_penjadwalan: number };

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
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}