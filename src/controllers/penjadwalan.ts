import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import { schedulePeracikan } from "../utils/schedule";
import Identifier from "../models/Identifier";

interface InputPenjadwalan {
    id_tandon: number,
    resep: string,
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
    } finally {
        prisma.$disconnect();
    }
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { resep, id_tandon, waktu, iterasi, interval } = request.payload as InputPenjadwalan;
        const _splitTime = waktu.split(":");
        const jam = parseInt(_splitTime[0]);
        const menit = parseInt(_splitTime[1]);
        const isAuth = request.auth.credentials;

        if (isAuth) {
            const resepTarget = await prisma.resep.findFirst({
                where: {
                    nama: resep
                }
            })
    
            if (!resepTarget) {
                return Boom.notFound("Tidak ada resep yang sesuai")
            }

            const arrJam: object[] = [{ hour: jam, minute: menit }];
            const arrValidasi: string[] = [`${jam}:${menit}`];

            for (let i = 0; i < iterasi-1; i++) {
                const intervalJam = Math.floor(resepTarget.interval / 60);
                const intervalMenit = resepTarget.interval % 60;
                let jamJadwal = jam + intervalJam * (i + 1);
                let menitJadwal = menit + intervalMenit * (i + 1);
                jamJadwal += Math.floor(menitJadwal / 60);
                menitJadwal %= 60;
                arrValidasi.push(`${jamJadwal}:${menitJadwal < 10 ? '0' + menitJadwal : menitJadwal}`);
                arrJam.push({ hour: jamJadwal, minute: menitJadwal })
            }

            const isJadwalExist = await prisma.penjadwalan.findFirst({
                where: {
                    waktu: {
                        in: arrValidasi
                    }
                }
            });

            if (isJadwalExist) {
                return Boom.badRequest(`Sudah ada peracikan di jam ${isJadwalExist.waktu}`)
            }
    
            arrValidasi.forEach(async (item, index) => {
                await prisma.penjadwalan.create({
                    data: {
                        resepId: resepTarget.id,
                        waktu: item,
                        tandonId: id_tandon,
                        isActive: true,
                    }
                })
            });

            schedulePeracikan(arrValidasi);
    
            return h.response({
                status: 'success',
                message: 'Penjadwalan telah dibuat'
            }).code(201);
        }
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    finally {
        prisma.$disconnect();
    }
}

export const deleteHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.query as Identifier;

        await prisma.penjadwalan.delete({
            where: {
                id
            },
        });

        const data = await prisma.penjadwalan.findMany();
        const jadwal = data.map(item => item.waktu);
        schedulePeracikan(jadwal);

        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil dihapus'
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.notFound("Tidak ada penjadwalan dengan id tersebut")
        }
    } finally {
        prisma.$disconnect();
    }
}

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.query as Identifier;
        const targetWaktu = await prisma.penjadwalan.findUnique({
            where: { id },
        });

        if (targetWaktu) {
            await prisma.penjadwalan.update({
                where: { id },
                data: {
                    isActive: !targetWaktu.isActive
                }
            })
        } else {
            return Boom.notFound("Penjadwalan terpilih tidak ditemukan");
        }

        const data = await prisma.penjadwalan.findMany({
            where: {
                isActive: true
            }
        });
        const jadwal = data.map(item => item.waktu);
        schedulePeracikan(jadwal);

        return h.response({
            status: 'success',
            message: 'Penjadwalan berhasil di-nonaktifkan'
        }).code(204);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message);
        }
    } finally {
        prisma.$disconnect();
    }
}