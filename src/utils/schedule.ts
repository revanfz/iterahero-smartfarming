import * as schedule from "node-schedule";
import axios from "axios";
import { prisma } from "../config/prisma";

export const schedulePeracikan = (jam: string[]) => {
  const mappedTime = jam.map((item) => {
    const waktu = item.split(":");
    return { hour: parseInt(waktu[0]), minute: parseInt(waktu[1]) };
  });
  console.log(mappedTime);

  mappedTime.forEach((waktu) => {
    const rule = new schedule.RecurrenceRule();
    rule.hour = waktu.hour;
    rule.minute = waktu.minute;
    console.log("skedul baru");
    schedule.scheduleJob(rule, () => {
      console.log(`Schedule ${waktu.hour}:${waktu.minute}`);
    });
  });
};
