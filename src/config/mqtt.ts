import * as mqtt from "mqtt";
import "dotenv/config";
import { prisma } from "./prisma";
import SensorModel from "../models/Sensor";

const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;

let broker: mqtt.MqttClient;

export function connectMqtt() {
  // broker = mqtt.connect({
  //   host: "c401972c13f24e59b71daf85c5f5a712.s2.eu.hivemq.cloud",
  //   port: 8883,
  //   username: process.env.MQTT_USERNAME,
  //   password: process.env.MQTT_PASSWORD,
  //   protocol: "mqtts",
  //   clientId,
  // });

  broker = mqtt.connect("ws://broker.hivemq.com:8000/mqtt", {
    protocolId: "MQTT",
    clean: true,
    clientId,
  });

  broker.on("connect", () => {
    console.log("Connected to MQTT");
    broker.subscribe("iterahero2023/#");
    broker.subscribe("iterahero/#");
  });

  broker.on("message", async (topic, payload, packet) => {
    try {
      const data = JSON.parse(payload.toString());
      console.log({ topic });
      if (topic.includes("iterahero/status/actuator")) {
        const id = topic.split("/")[3];
        const status = data[0].status;
        await prisma.aktuator.updateMany({
          where: {
            externalId: parseInt(id),
          },
          data: {
            status: status === "online" ? true : false,
          },
        });
      }
      if (topic.includes("iterahero/respon/actuator")) {
        console.log(data)
      }
      if (topic === "iterahero2023/peracikan/info") {
        await prisma.tandon.update({
          where: {
            id: 2,
          },
          data: {
            status: data.status,
          },
        });
      } else if (topic === "iterahero2023/info/sensor") {
        const listAutomasiSensor = await prisma.automationSensor.findMany({
          include: {
            sensor: true,
            aktuator: { include: { microcontroller: true } },
          },
        });

        const processSensorData = async (sensorData: [], key: string) => {
          const sensorField = key === "sensor_adc" ? "channel" : "GPIO";

          sensorData.forEach(async (item) => {
            const field = Object.keys(item)[0];
            const val = Object.values(item)[0] as number;
            await SensorModel.updateMany(
              { [sensorField]: parseInt(field) },
              { $set: { nilai: val, updatedAt: new Date() } }
            );

            await prisma.sensor.updateMany({
              where: { [sensorField]: parseInt(field) },
              data: { status: true },
            });

            listAutomasiSensor
              .filter(
                (automationItem) =>
                  automationItem.sensor[sensorField] === parseInt(field)
              )
              .forEach((automationItem) => {
                const conditionMet =
                  automationItem.condition === ">"
                    ? val > automationItem.constant
                    : val < automationItem.constant;

                publishData(
                  "iterahero2023/kontrol",
                  JSON.stringify({
                    pin: automationItem.aktuator.GPIO,
                    state: conditionMet ? automationItem.action : false,
                    microcontroller:
                      automationItem.aktuator.microcontroller?.name,
                  })
                );
              });
          });
        };
        await processSensorData(data.sensor_adc, "sensor_adc");
        await processSensorData(data.sensor_non_adc, "sensor_non_adc");
      } else if (topic.match("iterahero2023/info/actuator")) {
        data.actuator.forEach(async (item: object, index: number) => {
          const pin = Object.keys(item)[0]
          const status = Boolean(Object.values(item)[0])
          await prisma.aktuator.updateMany({
            where: {
              GPIO: parseInt(pin)
            },
            data: {
              status
            }
          })
        })
      }
       else if (topic === "iterahero2023/actuator") {
        data.actuator.forEach(async (item: object, index: number) => {
          const port = Object.keys(item)[0];
          const status = Object.values(item)[0];
          await prisma.aktuator.updateMany({
            where: {
              GPIO: parseInt(port),
            },
            data: {
              status,
            },
          });
        });
      }
    } catch (e) {
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

process.on("SIGINT", () => {
  broker.end();
});
