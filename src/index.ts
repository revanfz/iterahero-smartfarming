import { init, start } from "./server";
import { connectMqtt } from "./config/mqtt";
import main from "./config/mongo";
import { agendaInit } from "./utils/agenda";

init().then(() => {
    connectMqtt();
    agendaInit().catch(err => console.error(err))
    start().catch(err => console.error(err));
    main().catch(err => console.error(err))
});