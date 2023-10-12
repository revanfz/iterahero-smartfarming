import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import Identifier from "../models/Identifier";

interface CreateTandon {
    nama: string,
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const { id } = request.query as {
            id?: number
        };

        let data;
        if (id) {
            data = await prisma.tandon.findFirst({
                where: {
                    id
                },
            });
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
        const id = parseInt(request.query.id);
        const data = await prisma.tandon.findMany({
            where: {
                id
            },
            select: {
                sensor: true,
                tandonBahan: {
                    select: {
                        sensor: true
                    }
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
        const id = parseInt(request.query.id);
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