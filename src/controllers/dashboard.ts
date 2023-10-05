import { Request, ResponseToolkit } from "@hapi/hapi";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom";
import jwt from "jsonwebtoken";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const token = request.auth.credentials;
        const { email, role } = jwt.decode(token.toString()) as {
            email: string,
            role: string
        };

        const target = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                greenhouse: {
                    include: {
                        selenoid: true
                    }
                },
                tandon: {
                    include: {
                        selenoid: true,
                        tandonBahan: {
                            include: {
                                sensor: true,
                            }
                        },
                    }
                }
            }
        })

        if (!target) {
            return Boom.notFound("Tidak ada peracikan")
        }

        return h.response({
            status: 'success',
            target
        }).code(200);
    }
    catch (e) {
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    prisma.$disconnect();
}