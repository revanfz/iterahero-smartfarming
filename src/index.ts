import { init, start } from "./server";
import { connectMqtt } from "./config/mqtt";
import { initPeracikan } from "./utils/schedule";

init().then(() => {
    initPeracikan();
    connectMqtt();
    start();
});