import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import SensorModel from "../models/Sensor";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        let filter = {}
        const id_greenhouse = request.query.id_greenhouse;
        const id_tandon = request.query.id_tandon;
        if (id_greenhouse) {
            filter = {greenhouseId: id_greenhouse} 
        }
        if (id_tandon) {
            filter = {tandonId: id_tandon}
        }
        const data = await SensorModel.find(filter);
        
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