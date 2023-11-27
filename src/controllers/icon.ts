import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from '@hapi/boom'
import { prisma } from "../config/prisma";

export const getHandler = async (_: Request, h: ResponseToolkit) => {
    try {
        const data = await prisma.icon.findMany();

        return h.response({
            status: 'success',
            data
        })
    }
    catch (e) {
        console.log(e)
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    finally {
        await prisma.$disconnect()
    }
}