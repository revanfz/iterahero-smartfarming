import * as schedule from "node-schedule";

interface InputPeracikan {
    startHour: number,
    startMinute: number,
    iterasi: number,
    interval: number
}

const schedulePeracikan = (x: InputPeracikan) => {
    let counter = 0;
    const arr = [x.startHour];
    for ( let i = 0; i < x.iterasi-1; i++ ) {
        arr.push(x.startHour + x.interval);
    }
    const jam = arr.join(', ');
    console.log(schedule);

    const jadwal = schedule.scheduleJob(`* ${jam} * * *`, () => {
        if (counter < x.iterasi) {
            console.log(`Peracikan ke ${counter}`)
            counter++;
            if (counter >= x.iterasi) {
                jadwal.cancel()
            }
        }
    });
}

const input: InputPeracikan = {
    startHour: 12,
    startMinute: 0,
    interval: 2,
    iterasi: 3
}
schedulePeracikan(input);