import { Request, ResponseToolkit } from "@hapi/hapi";
import Identifier from "../models/Identifier";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.query as Identifier;

        const data = await prisma.sensor.findMany({
            where: {
                tandonId: id
            }
        });

        if (!data) {
            return Boom.notFound("Tidak ada sensor")
        }

        return h.response({
            status: "success",
            data
        });
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e)
            return Boom.internal(e.message);
        }
    }
    finally {
        await prisma.$disconnect();
    }
}