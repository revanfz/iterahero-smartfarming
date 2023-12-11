import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import SensorModel from "../models/Sensor";
import AktuatorLog from "../models/AktuatorLog";

export const getSensorHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    let filter = {};
    const id_greenhouse = request.query.id_greenhouse;
    const id_tandon = request.query.id_tandon;
    if (id_greenhouse) {
      filter = { greenhouseId: id_greenhouse };
    }
    if (id_tandon) {
      filter = { tandonId: id_tandon };
    }
    const data = await SensorModel.find(filter);

    return h.response({
      status: "success",
      data,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      Boom.internal(e.message);
    }
  }
};

export const getAktuatorHandler = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    const id_aktuator = parseInt(request.query.id);
    if (isNaN(id_aktuator)) {
      return Boom.badRequest("ID aktuator invalid");
    }
    const data = await AktuatorLog.find({ id_aktuator });
    const counts = await AktuatorLog.aggregate([
      {
        $match: {
          id_aktuator,
          status: { $exists: true },
        },
      },
      {
        $group: {
          _id: {
            $switch: {
              branches: [
                {
                  case: { $eq: ["$status", true] }, // Jika status adalah true
                  then: "on",
                },
                {
                  case: { $eq: ["$status", false] }, // Jika status adalah false
                  then: "off",
                },
              ],
              default: null,
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);
    const log = {
      on: counts.length ? counts.find((item) => item._id === "on").count ?? 0 : 0,
      off: counts.length ? counts.find((item) => item._id === "off").count ?? 0 : 0
    };

    return h.response({
      status: "success",
      data,
      log,
    });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      Boom.internal(e.message);
    }
  }
};
