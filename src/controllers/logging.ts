import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import SensorModel from "../models/Sensor";

export const getHandler = async (_request: Request, h: ResponseToolkit) => {
    try {
        const data = await SensorModel.find();
        
        return h.response({
            status: 'success',
            data
        })
    }
    catch(e) {
        console.log(e)
        if (e instanceof Error) {
            Boom.internal(e.message)
        }
    }
}