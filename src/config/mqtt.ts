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
            await SensorModel.updateMany(
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
  return new Promise((resolve, reject) => {
    if (!microcontrollerId) {
      reject('failed')
    }
    broker.subscribe("iterahero2023/respon/kontrol");

    broker.once("message", async (topic, payload, packet) => {
      if (topic === "iterahero2023/respon/kontrol/") {
        const data = JSON.parse(payload.toString());
        if (data.response) {
          resolve('success');
        } else {
          console.error("Mikrokontroller is not responding");
          await prisma.microcontroller.update({
            where: {
              id: microcontrollerId
            },
            data: {
              status: false
            }
          })
          reject('failed');
        }
      }
    });

    // Mengirim pesan ke mikrokontroler
    broker.publish(topic, message);

    // Set timeout untuk menangani kasus waktu habis
    const timeoutId = setTimeout(() => {
      console.error("Timeout: Mikrokontroller response not received within 3 seconds");
      reject('timeout');
    }, 3000);

    // Menangani hasil balik dari race antara respon atau timeout
    const handleResult = (result: any) => {
      clearTimeout(timeoutId);
      return result;
    };

    Promise.race([
      new Promise(() => {}), // Promise ini selalu pending untuk menunggu event "message"
      new Promise((_, reject) => setTimeout(() => reject('timeout'), 3000))
    ]).then(handleResult, handleResult);
  });
}

process.on("SIGINT", () => {
  broker.end();
});
