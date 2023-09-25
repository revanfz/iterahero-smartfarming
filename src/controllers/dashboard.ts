import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        let peracikan = await prisma.resep.findMany();

        if (!peracikan) {
            return Boom.notFound("Tidak ada peracikan")
        }

        return h.response({
            status: 'success',
            peracikan
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}