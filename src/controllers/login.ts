import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import jwt from "jsonwebtoken"
import "dotenv/config";
import { prisma } from "../config/prisma";
import Boom from "@hapi/boom"
import bcrypt from "bcrypt"
import { publishData } from "../config/mqtt";

interface LoginInput {
    email: string,
    username?: string,
    password: string
}

export const getHandler = (request: Request, h: ResponseToolkit) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200)
}

export const postHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const { email, password } = request.payload as LoginInput;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return Boom.unauthorized(`Username dengan ${email} tidak terdaftar`);
        }
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) {
            return Boom.unauthorized("Username tidak terdaftar")
        }

        const payloadJwt = {
            email,
            id_user: user.id,
            role: user.role,
            aud: process.env.JWT_AUD,
            iss: process.env.JWT_ISS,
            sub: process.env.JWT_SUB
        }
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jwt.sign(payloadJwt, jwtSecret, { expiresIn: "3d" });
        
        return h.response({
            status: 'success',
            accessToken: token,
        }).code(200);    
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e)
            return Boom.internal(e.message);
        }
    }
    await prisma.$disconnect();
}