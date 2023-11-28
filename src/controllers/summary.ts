import { Request, ResponseToolkit } from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import SensorLog from "../models/SensorLog";
import { pipelineSummary, getSummaryTimespan } from "../utils/aggregate";

export const getHandler = async (request: Request, h: ResponseToolkit) => {
  try {
    const id_sensor = parseInt(request.query.id);
    const { timespan } = request.query;

    if (isNaN(id_sensor)) {
      return Boom.badRequest("ID sensor tidak valid");
    }

    const pipeline = pipelineSummary(timespan, id_sensor)

    if (pipeline.length) {
        const data = await SensorLog.aggregate(pipeline);

        return h.response({
            status: 'success',
            data
        })
    } else {
        return Boom.badRequest("Timespan tidak valid")
    }
    
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return Boom.internal(e.message);
    }
  } finally {
  }
};

export const downloadHandler = async (request: Request, h: ResponseToolkit) => {
    try {
        const id_sensor = parseInt(request.query.id)
        const { timespan } = request.query;
        
        if (isNaN(id_sensor)) {
            return Boom.badRequest("ID Sensor tidak valid")
        }
        const { startDate, endDate } = await getSummaryTimespan(timespan, id_sensor);

        const data = await SensorLog.find({
            id_sensor,
            createdAt: { $gte: startDate, $lte: endDate }
        }).select("nama nilai createdAt -_id").sort({ createdAt: 1 })

        if (data.length < 1) {
            return Boom.badRequest("Data rekapan tidak ada")
        }

        const response = h.response(JSON.stringify(data)).code(200)
        response.header('Content-Type', 'application/json')
        response.header('Content-Disposition', `attachment; filename=${data[0].nama}.json`)

        return response;
    }
    catch (e) {
        console.log(e)
        if (e instanceof Error) {
            return Boom.internal(e.message)
        }
    }
    finally {}
}
