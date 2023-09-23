import { Request, ResponseToolkit } from "@hapi/hapi";
import jwt, { Secret } from "jsonwebtoken"
import "dotenv/config";

export const getHandler = (request: Request, h: ResponseToolkit) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200)
}

export const postHandler = (request: Request, h: ResponseToolkit) => {
    try {
        const payloadJwt = {
            username: "wkwkw",
            password: "wkwkwk",
            aud: process.env.JWT_AUD,
            iss: process.env.JWT_ISS,
            sub: process.env.JWT_SUB
        }
        const jwtSecret = process.env.JWT_SECRET || '';
        const token = jwt.sign(payloadJwt, jwtSecret);

        return h.response({
            status: 'success',
            accessToken: token,
        }).code(200);    
    }
    catch (e) {
        console.error(e);
    }
}