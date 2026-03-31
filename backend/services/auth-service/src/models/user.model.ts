import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string,
    username: string;
    email: string;
    mobile: string;
    password: string;
    createdAt: Date;
    role: string;
    status?: string;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        username: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        mobile: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        status: { type: String, enum: ['active', 'inactive'], default: 'active' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const userModel = mongoose.model<IUser>("User", userSchema);

export default userModel;