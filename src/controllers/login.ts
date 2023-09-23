import { Request, ResponseToolkit } from "@hapi/hapi";

export const postHandler = (request: Request, h: ResponseToolkit) => {
    return h.response({
        status: "success",
        message: "Api login"
    }).code(200)
}