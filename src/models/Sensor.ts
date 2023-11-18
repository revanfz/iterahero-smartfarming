import mongoose, { Document, Schema } from "mongoose";

interface Model extends Document {
    nama: string,
    nilai: number,
    channel: number,
    gpio: number,
    greenhouseId: number,
    tandonId: number
}

const sensorSchema = new Schema<Model>({
    nama: { type: String, required: true },
    nilai: { type: Number, required: true, default: 0},
    gpio: { type: Number },
    channel: { type: Number },
    greenhouseId: { type: Number },
    tandonId: { type: Number }
})

const SensorModel = mongoose.model<Model>('Model', sensorSchema)

export default SensorModel