import * as schedule from "node-schedule";
import axios from "axios";
import { prisma } from "../config/prisma";

export const schedulePeracikan = (
  token: string,
  resep: string,
  jam: number[],
  menit: number,
  iterasi: number,
  interval: number
) => {
  const rule = new schedule.RecurrenceRule();
  rule.hour = jam;
  rule.minute = menit
  rule.tz = "Etc/GMT-7"

  const job = schedule.scheduleJob(rule, async () => {
    console.log("Peracikan");
    await axios.post("/api/v1/peracikan",
      {
        nama: resep
      }, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
  });
};
