import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom"
import { generatePipeline } from "../utils/aggregate";
import SensorLog from "../models/SensorLog";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const timespan = request.query.timespan;
        const id_sensor = parseInt(request.query.id)
        if (isNaN(id_sensor) || !timespan) {
            return Boom.badRequest("Id sensor atau timespan tidak valid")
        }
        const pipeline = generatePipeline(timespan, id_sensor)
        const data = await SensorLog.aggregate(pipeline)

        return h.response({
            status: 'succes',
            data
        })
    }
    catch (e) {
        console.log(e)
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
}