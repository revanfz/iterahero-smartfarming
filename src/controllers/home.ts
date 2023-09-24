import { Request, ResponseToolkit } from "@hapi/hapi"

export const getHandler = (request: Request, h: ResponseToolkit) => {
    return h.response({
        status: "success",
        message: "Welcome to iterahero2023 API"
    })
}