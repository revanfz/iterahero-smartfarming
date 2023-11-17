import { init, start } from "./server";
import { connectMqtt } from "./config/mqtt";
import { initPeracikan } from "./utils/schedule";
import main from "./config/mongo";

init().then(() => {
    initPeracikan();
    connectMqtt();
    start();
    main().catch(err => console.error(err))
});