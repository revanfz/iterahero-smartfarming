import mongoose, { Date, Document, Schema } from "mongoose";

interface Model extends Document {
    nama: string,
    nilai: number,
    channel: number,
    gpio: number,
    greenhouseId: number,
    tandonId: number,
    microcontrollerId: number,
    createdAt: Date,
    updatedAt: Date
}

const sensorSchema = new Schema<Model>({
    nama: { type: String, required: true },
    nilai: { type: Number, required: true, default: 0},
    microcontrollerId: { type: Number, required: true },
    gpio: { type: Number },
    channel: { type: Number },
    greenhouseId: { type: Number },
    tandonId: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const SensorModel = mongoose.model<Model>('Sensor', sensorSchema)

export default SensorModel