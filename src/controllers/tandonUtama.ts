import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";


export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const id = parseInt(request.query.id)
        let data;
        if (isNaN(id)) {
            data = await prisma.tandon.findMany({
                where: {
                    userId: id_user
                },
            });
        } else {
            data = await prisma.tandon.findUnique({
                where: {
                    id
                }
            })
        }

        if (!data) {
            return Boom.notFound("Tidak ada tandon terpilih");
        }

        return h.response({
            status: 'success',
            data
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e);
            return Boom.internal(e.message)
        }
    }
    await prisma.$disconnect();
}

export const sensorByTandonHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.params.id);
        const data = await prisma.sensor.findMany({
            where: {
                tandon: {
                    id
                }
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada sensor")
        }

        return h.response({
            status: "success",
            data
        })
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e)
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect()
    }
}

export const actuatorByTandonHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.params.id);
        const data = await prisma.aktuator.findMany({
            where: {
                tandonId: id
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada aktuator")
        }

        return h.response({
            status: "success",
            data
        }).code(200)
    }
    catch (e) {
        if (e instanceof Error) {
            console.error(e);
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect();
    }
}

export const patchHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_tandon, ppm, rasioA, rasioB, rasioAir } = request.payload as {
            id_tandon: number,
            ppm: number,
            rasioA: number,
            rasioB: number,
            rasioAir: number
        }

        const target = await prisma.tandon.findUnique({
            where: {
                id: id_tandon
            }
        })

        if (!target) {
            return Boom.notFound("Tidak ada tandon terpilih.")
        }

        await prisma.tandon.update({
            where: {
                id: id_tandon
            },
            data: {
                ppm,
                rasioA,
                rasioB,
                rasioAir
            }
        })

        return h.response({
            status: 'success',
            message: `Rasio ${target.nama} berhasil diperbarui`
        });
    }
    catch(e) {
        if (e instanceof Error) {
            console.error(e)
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect();
    }
}