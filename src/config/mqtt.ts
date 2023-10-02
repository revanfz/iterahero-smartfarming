import * as mqtt from "mqtt";
import "dotenv/config";

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
    broker.subscribe("iterahero2023/led")
    broker.subscribe("iterahero2023/peracikan");
    broker.subscribe("iterahero2023/penjadwalan");
    broker.subscribe("iterahero2023/+/sensor");
  });

  broker.on("message", (topic, payload, packet) => {
    try {
      const data = JSON.parse(payload.toString());
      console.log(data);
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
