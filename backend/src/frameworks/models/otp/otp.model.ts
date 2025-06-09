import e from "express";
import { IOTPSchema } from "../../../adapters/interfaces/IOtpSchema";
import mongoose, { Schema, Document, Model } from "mongoose";
const OtpSchema = new Schema<IOTPSchema>({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5, // 5 minutes
    },
})

const Otp: Model<IOTPSchema> = mongoose.model("OTP", OtpSchema);
export default Otp
