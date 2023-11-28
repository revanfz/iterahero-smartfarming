import mongoose from "mongoose";
import "dotenv/config";
import SensorLog from "../models/SensorLog";
import { pipelineGrafik } from "./aggregate";

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URL || "");
};

(async function () {
  await connect();

  try {
    const pipeline = pipelineGrafik("Week", 1)
    const result: Document[] = await SensorLog.aggregate(pipeline)
    console.log(result);
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
    }
  } finally {
    await mongoose.disconnect();
  }
})();
