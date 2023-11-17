import mongoose, { Document, Schema } from "mongoose";

interface Model extends Document {
    nama: string,
    nilai: number,
    sensorId: number
}

const sensorSchema = new Schema<Model>({
    nama: { type: String, required: true },
    nilai: { type: Number, required: true, default: 0},
    sensorId: { type: Number, required: true, unique: true}
})

const SensorModel = mongoose.model<Model>('Model', sensorSchema)

// SensorModel.watch().on('change', data => console.log(data))

export default SensorModel