import * as mqtt from "mqtt";
import "dotenv/config";
import { prisma } from "./prisma";
import SensorModel from "../models/Sensor";

const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;

let broker: mqtt.MqttClient;

export function connectMqtt() {
  broker = mqtt.connect({
    host: "c401972c13f24e59b71daf85c5f5a712.s2.eu.hivemq.cloud",
    port: 8883,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    protocol: "mqtts",
    clientId
  });

  broker.on("connect", () => {
    console.log("Connected to MQTT");
    broker.subscribe("iterahero2023/#");
  });

  broker.on("message", async (topic, payload, packet) => {
    try {
      const data = JSON.parse(payload.toString());
      console.log(data);
      if (topic === "iterahero2023/peracikan/info") {
        await prisma.tandon.update({
          where: {
            id: 2
          },
          data: {
            status: data.status
          }
        })
      }
      else if (topic === "iterahero2023/info") {
        console.log(data.sensor)
        data.sensor.forEach(async (item: object, index: number) => {
          const id = Object.keys(item)[0]
          const val = Object.values(item)[0]
          await SensorModel.findOneAndUpdate({ sensorId: parseInt(id)}, { nilai: val })
        })
      }
    }
    catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  });
}

export function publishData(topic: string, message: string) {
  if (broker) {
    broker.publish(topic, message);
  } else {
    console.error("MQTT is not connected");
  }
}

process.on('SIGINT', () => {
    broker.end();
})
