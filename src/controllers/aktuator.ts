import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id = parseInt(request.query.id);
        let data;

        if (id) {
            data = await prisma.sensor.findMany({
                where: {
                    tandonId: id,
                },
                include: {
                    tandonBahan: true
                }
            })
        } else {
            data = await prisma.aktuator.findMany({
                where: {
                    tandonId: id
                }
            });
        }

        if (!data) {
            return Boom.notFound("Tidak ada aktuator")
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