import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom"
import { pipelineGrafik } from "../utils/aggregate";
import SensorLog from "../models/SensorLog";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        let data;
        const timespan = request.query.timespan;
        const id_sensor = parseInt(request.query.id)
        if (isNaN(id_sensor) || !timespan) {
            return Boom.badRequest("Id sensor atau timespan tidak valid")
        }
        const pipeline = pipelineGrafik(timespan, id_sensor)
        if (pipeline.length) {
            data = await SensorLog.aggregate(pipeline)
        } else {
            return Boom.badRequest("Timespan tidak valid")
        }
        return h.response({
            status: 'succes',
            data
        })
    }
    catch (e) {
        console.log(e)
        if (e instanceof Error) {
            return Boom.badImplementation(e.message)
        }
    }
}