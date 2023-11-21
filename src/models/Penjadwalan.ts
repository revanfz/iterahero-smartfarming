import mongoose, { Document, Schema } from "mongoose";

interface Model extends Document {
    waktu: string,
    hari: number[],
}