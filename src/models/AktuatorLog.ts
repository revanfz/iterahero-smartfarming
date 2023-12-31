import mongoose, { Date, Document, Schema } from "mongoose";

interface Model extends Document {
    id_aktuator: number,
    nama: string,
    message: string,
    status: boolean
}

const AktuatorLogSchema = new Schema<Model>({
    id_aktuator: { type: Number, required: true },
    nama: { type: String },
    message: { type: String },
    status: { type: Boolean }
}, { timestamps: { createdAt: true, updatedAt: false }})

const AktuatorLog = mongoose.model<Model>('AktuatorLog', AktuatorLogSchema)

export default AktuatorLog
