import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import Identifier from "../models/Identifier";

interface CreateTandon {
    nama: string,
}

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.query as Identifier;
        const data = await prisma.tandon.findFirst({
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