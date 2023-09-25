import { init, start } from "./server";
import { connectMqtt } from "./config/mqtt";

init().then(() => {
    start();
    connectMqtt();
});