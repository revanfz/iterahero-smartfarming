import { Request, ResponseToolkit } from "@hapi/hapi";
import prisma from "../config/prisma";
import Boom from "@hapi/boom";
import bcrypt from "bcrypt";

interface RegisterInput {
    name: string,
    username: string,
    password: string,
    email: string
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { name, username, password, email } = request.payload as RegisterInput;

        const isRegistered = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (isRegistered) {
            return Boom.forbidden("Username sudah terdaftar")
        }
        await prisma.user.create({
            data: {
                name,
                username,
                password: await bcrypt.hash(password, 10),
                email,
                role: "operator",
            }
        })
        return h.response({
            status: 'success',
            message: `Akun ${email} berhasil didaftarkan`
        }).code(201)
    }
    catch(e) {
        if (e instanceof Error) {
            return Boom.badImplementation(e.message);
        }
    }
    // await prisma.$disconnect();
}