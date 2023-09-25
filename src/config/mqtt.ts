import * as mqtt from "mqtt";

const clientId = `Iterahero2023_${Math.random().toString().slice(4)}`;

let broker: mqtt.MqttClient;

export function connectMqtt() {
  broker = mqtt.connect("ws://broker.hivemq.com:8000/mqtt", {
    clientId,
    keepalive: 30,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    connectTimeout: 30 * 1000,
    rejectUnauthorized: false,
    reconnectPeriod: 1000,
  });

  broker.on("connect", () => {
    console.log("Connected to MQTT");
    broker.subscribe("iterahero/dashboard");
  });

  broker.on("message", (topic, payload, packet) => {
    const data = JSON.parse(payload.toString());
    console.log(data);
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
// export default mqttClient;
