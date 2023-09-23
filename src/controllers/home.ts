import { Request, ResponseToolkit } from "@hapi/hapi"

export const getHandler = (request: Request, h: ResponseToolkit) => {
    console.log("Processing request", request.info.id);
    return "Hello! Nice to meet you.";
}