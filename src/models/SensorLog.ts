import mongoose, { Date, Document, Schema } from "mongoose";

interface Model extends Document {
    id_sensor: number,
    nama: string,
    microcontrollerId: number,
    nilai: number,
}

const SensorLogSchema = new Schema<Model>({
    id_sensor: { type: Number, required: true },
    nama: { type: String, required: true },
    nilai: { type: Number, default: 0 },
    microcontrollerId: { type: Number, required: true }
}, { timestamps: { createdAt: true, updatedAt: false }})

const SensorLog = mongoose.model<Model>('SensorLog', SensorLogSchema)

export default SensorLog
