import { prisma } from "../config/prisma";
import Identifier from "../models/Identifier";
import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id_user } = request.auth.credentials as {
            id_user: number
        }
        const data = await prisma.user.findUnique({
            where: {
                id: id_user
            },
            select: {
                greenhouse: true
            }
        })
        if (!data) {
            return Boom.notFound("Tidak ada greenhouse.")
        }

        return h.response({
            status: "success",
            data
        }).code(200);
    }
    catch(e) {
        if (e instanceof Error) {
            console.log(e)
            return Boom.internal(e.message);
        }
    }
    finally {
        prisma.$disconnect();
    }
}