import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom"
import { prisma } from "../config/prisma";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.tandonBahan.findMany({
            where: {},
            include: {
                sensor: true
            }
        })

        if (!data) {
            return Boom.notFound("Tidak ada bahan")
        }

        return h.response({
            status: 'success',
            data
        }).code(200);
    }
    catch(e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    await prisma.$disconnect();
}