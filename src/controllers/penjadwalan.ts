import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

interface InputPenjadwalan {
    resep: string,
    id_tandon: number,
    waktu: string[],
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
        const input = request.payload as InputPenjadwalan;
        const target = await prisma.resep.findFirst({
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
                    resepId: target.id,
                    waktu,
                    tandonId: input.id_tandon
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