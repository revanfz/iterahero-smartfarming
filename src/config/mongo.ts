import mongoose from "mongoose";
import "dotenv/config";

export default async function main() {
    await mongoose.connect(process.env.MONGODB_URL || '')
}

