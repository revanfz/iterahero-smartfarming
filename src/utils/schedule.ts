import * as schedule from "node-schedule";
import axios from "axios";

export const schedulePeracikan = (token: string, resep:string, jam: number, menit: number, iterasi: number, interval: number) => {
    let counter = 0;
    const arr = [jam];
    for ( let i = 0; i < iterasi-1; i++ ) {
        arr.push(jam + interval * (i + 1));
    }
    const target = arr.join(',');
    console.log(`${menit} ${target} * * *`);

    const jadwal = schedule.scheduleJob(`${menit} ${jam} * * *`, async () => {
        try {
            if (counter < iterasi) {
                console.log(`Peracikan ke ${counter+1}`)
                const peracikan = await axios.post("/api/v1/peracikan", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                })
                counter++;
                if (counter >= iterasi) {
                    jadwal.cancel()
                }
            }
        }
        catch(e) {
            if (e instanceof Error) {
                console.error(e);
                jadwal.cancel();
            }
        }
    });
}