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
                include: {
                    sensor: true,
                    penjadwalan: true,
                    tandonBahan: {
                        include: {
                            sensor: true,
                        }
                    },
                }
            });
        } else {
            data = await prisma.tandon.findMany({
                where: {
                    userId: id_user
                },
                include: {
                    sensor: true,
                    penjadwalan: true,
                    tandonBahan: {
                        include: {
                            sensor: true
                        }
                    }
                }
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
    prisma.$disconnect();
}