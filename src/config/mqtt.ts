import * as mqtt from "mqtt";
import "dotenv/config";
import { prisma } from "./prisma";
import SensorModel from "../models/Sensor";
import AktuatorLog from "../models/AktuatorLog";
import { Aktuator } from "@prisma/client";

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

  broker = mqtt.connect("mqtt://broker.emqx.io:1883", {
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
      if (topic.match("iterahero2023/peracikan/log")) {
        const target = await prisma.microcontroller.findUnique({
          where: {
            name: data.mikrokontroler,
          },
        });
        if (target) {
          const tandon = await prisma.tandon.findFirst({
            where: {
              microcontroller: {
                every: {
                  id: target.id,
                },
              },
            },
          });
          if (data.status == "terminated" && tandon) {
            const reason: string[] = [];
            for (const item in data.sensor) {
              const gpio = parseInt(data.sensor[item]);
              const sensor = await prisma.sensor.findFirst({
                where: {
                  GPIO: gpio,
                  microcontroller: {
                    name: target.name,
                  },
                },
              });
              reason.push(`${sensor?.name}`);
            }
            await prisma.notification.create({
              data: {
                header: `Peracikan ${tandon?.nama} dihentikan`,
                message: `Peracikan ${
                  tandon?.nama
                } dihentikan karena ${reason.join(", ")} bermasalah`,
                userId: tandon.userId,
                loc: tandon.nama + "," + tandon.location,
              },
            });
          }
        }
      }
      if (topic.match("iterahero2023/mikrokontroller/status")) {
        const target = await prisma.microcontroller.findUnique({
          where: {
            name: data.mikrokontroler,
          },
          include: {
            tandon: true,
          },
        });
        
        if (target) {
          await prisma.microcontroller.update({
            where: {
              id: target.id,
            },
            data: {
              status: Boolean(data.status),
            },
          });
          await prisma.tandon.update({
            where: {
              id: target.tandon?.id,
            },
            data: {
              isOnline: Boolean(data.status),
            },
          });
        }
        if (target?.updated_at) {
          const update_time = new Date(target.updated_at);
          const now = new Date();
          const timeDiff =
            (now.getTime() - update_time.getTime()) / (1000 * 60);
          if (timeDiff > 5) {
            publishData(
              "iterahero2023/tandon/volume",
              JSON.stringify({
                mikrokontroler: target.name,
                volume: target.tandon?.volume,
              }),
              target.id
            )
              .then(() => {
                console.log("Volume berhasil diupdate");
              })
              .catch((e) => {
                console.log("Volume gagal diupdate");
              });
          }
        }
      }
      if (topic === "iterahero2023/peracikan/info") {
        await prisma.tandon.updateMany({
          where: {
            microcontroller: {
              every: {
                name: data.microcontrollerName,
              },
            },
          },
          data: {
            status: data.status,
            volume: data.volume,
          },
        });
      }
      if (topic === "iterahero2023/info/sensor") {
        let microcontroller = await prisma.microcontroller.findFirst({
          where: {
            name: data.microcontrollerName,
          },
        });
        const listAutomasiSensor = await prisma.automationSensor.findMany({
          where: {
            aktuator: {
              microcontroller: {
                name: data.microcontrollerName,
              },
            },
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
              {
                [sensorField.toLowerCase()]: parseInt(field),
                microcontrollerId: microcontroller?.id,
              },
              { $set: { nilai: val, updatedAt: new Date() } }
            )

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
          const aktuator = await prisma.aktuator.findMany({
            where: {
              GPIO: parseInt(pin),
            },
          });
          aktuator.forEach(async (item, idx) => {
            await AktuatorLog.create({
              id_aktuator: item.id,
              message: `${item.name} ${isActive ? "menyala" : "dimatikan"}`,
            });
          });
        });
      }
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  });
}

export function publishData(
  topic: string,
  message: string,
  microcontrollerId: number
) {
  return new Promise(async (resolve, reject) => {
    if (!microcontrollerId) {
      reject("failed");
    } else {
      const microcontroller = await prisma.microcontroller.findUnique({
        where: {
          id: microcontrollerId,
        },
        select: {
          status: true,
        },
      });
      if (!microcontroller?.status) {
        reject("failed");
      } else {
        broker.publish(topic, message);
        resolve("success");
      }
    }
  });
}

process.on("SIGINT", () => {
  broker.end();
});
