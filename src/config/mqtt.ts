import * as mqtt from "mqtt";
import "dotenv/config";
import { prisma } from "./prisma";
import SensorModel from "../models/Sensor";

const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;

export let broker: mqtt.MqttClient;

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
    // broker.subscribe("iterahero/#");
  });

  broker.on("message", async (topic, payload, packet) => {
    try {
      const data = JSON.parse(payload.toString());
      if (topic === "iterahero/respon/actuator") {
      }
      if (topic === "iterahero2023/mikrokontroller/status") {
        const target = await prisma.microcontroller.findUnique({
          where: {
            name: data.mikrokontroler
          }
        })
        await prisma.microcontroller.update({
          where: {
            id: target?.id
          },
          data: {
            status: true
          }
        })
      }
      if (topic === "iterahero2023/peracikan/info") {
        console.log(JSON.stringify(data));
        
        await prisma.tandon.updateMany({
          where: {
            microcontroller: {
              every: {
                name: data.microcontrollerName
              }
            }
          },
          data: {
            status: data.status,
          },
        });
      }
      if (topic === "iterahero2023/info/sensor") {
        console.log(JSON.stringify(data));
        let microcontroller = await prisma.microcontroller.findFirst({
          where: {
            name: data.microcontrollerName
          }
        })
        const listAutomasiSensor = await prisma.automationSensor.findMany({
          where: {
            aktuator: {
              microcontroller: {
                name: data.microcontrollerName
              }
            }
          },
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
            await SensorModel.updateOne(
              { [sensorField.toLowerCase()]: parseInt(field), microcontrollerId: microcontroller?.id },
              { $set: { nilai: val, updatedAt: new Date() } }
            );

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
                  }),
                  automationItem.aktuator.microcontroller?.id ?? 0
                );
              });
          });
        };
        await processSensorData(data.sensor_adc, "sensor_adc");
        await processSensorData(data.sensor_non_adc, "sensor_non_adc");
      }
      if (topic === "iterahero2023/info/actuator") {
        console.log(JSON.stringify(data));

        data.actuator.forEach(async (item: object, index: number) => {
          const pin = Object.keys(item)[0];
          const isActive = Boolean(Object.values(item)[0]);
          await prisma.aktuator.updateMany({
            where: {
              GPIO: parseInt(pin),
            },
            data: {
              isActive,
            },
          });
        });
      }
      if (topic === "iterahero2023/actuator") {
        console.log(JSON.stringify(data));
        data.actuator.forEach(async (item: object, index: number) => {
          const port = Object.keys(item)[0];
          const isActive = Object.values(item)[0];
          await prisma.aktuator.updateMany({
            where: {
              GPIO: parseInt(port),
            },
            data: {
              isActive,
            },
          });
        });
      }
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  });
}

export function publishData(topic: string, message: string, microcontrollerId: number) {
  return new Promise(async (resolve, reject) => {
    if (!microcontrollerId) {
      reject('failed')
    }
    else {
      resolve('success')
      broker.publish(topic, message);
    }
  });
}

process.on("SIGINT", () => {
  broker.end();
});
