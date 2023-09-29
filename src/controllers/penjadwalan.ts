import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import { schedulePeracikan } from "../utils/schedule";
import Identifier from "../models/Identifier";

interface InputPenjadwalan {
    resep: string,
    id_tandon: number,
    waktu: string,
    iterasi: number,
    interval: number
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.penjadwalan.findMany({
            include: {
                resep: true
            }
        });

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
        const _splitTime = waktu.split(":");
        const jam = parseInt(_splitTime[0]);
        const menit = parseInt(_splitTime[1]);
        const isAuth = request.auth.credentials;

        if (isAuth) {
            const input = request.payload as InputPenjadwalan;
            const resepTarget = await prisma.resep.findFirst({
                where: {
                    nama: resep
                }
            })
    
            if (!resepTarget) {
                return Boom.notFound("Tidak ada resep yang sesuai")
            }

            const arrJam = [jam];
            let menit = resepTarget.interval % 60;

            for (let i = 0; i < iterasi - 1; i++) {
                let intervalToHour = Math.floor(resepTarget.interval / 60);
                arrJam.push( jam + intervalToHour * (i + 1));
            }

            const isJadwalExist = await prisma.penjadwalan.findFirst({
                where: {
                    waktu: {
                        in: arrJam
                    }
                }
            });

            if (isJadwalExist) {
                return Boom.badRequest(`Sudah ada peracikan di jam ${isJadwalExist.waktu}`)
            }
    
            arrJam.forEach(async (item, index) => {
                await prisma.penjadwalan.create({
                    data: {
                        resepId: resepTarget.id,
                        waktu: item,
                        tandonId: id_tandon,
                        isActive: true
                    }
                })
            });

            schedulePeracikan(isAuth.toString(), resep, arrJam, menit, iterasi, interval)
    
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
        const { id } = request.query as Identifier;

        const data = await prisma.penjadwalan.delete({
            where: {
                id
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

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.query as Identifier;
        const targetWaktu = await prisma.penjadwalan.update({
            where: { id },
            data: {
                isActive: false
            }
        });

        if (!targetWaktu) {
            return Boom.notFound("Tidak ada penjadwalan terkait.");
        }

        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil di-nonaktifkan'
        }).code(201)
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    }
    prisma.$disconnect();
}