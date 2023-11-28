import mongoose, { Date, Document, Schema } from "mongoose";

interface Model extends Document {
  id_sensor: number;
  nama: string;
  nilai: number;
  channel: number;
  gpio: number;
  greenhouseId: number;
  tandonId: number;
  microcontrollerId: number;
  createdAt: Date;
  updatedAt: Date;
}

const sensorSchema = new Schema<Model>(
  {
    id_sensor: { type: Number, required: true },
    nama: { type: String, required: true },
    nilai: { type: Number, required: true, default: 0 },
    microcontrollerId: { type: Number, required: true },
    gpio: { type: Number },
    channel: { type: Number },
    greenhouseId: { type: Number },
    tandonId: { type: Number },
  },
  { timestamps: true }
);

const Sensor = mongoose.model<Model>("Sensor", sensorSchema);

export default Sensor;
