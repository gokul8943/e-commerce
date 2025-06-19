import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUserSchema } from "../../../adapters/interfaces/IUserSchema";

// Define the User interface extending Mongoose's Document

const userSchema: Schema<IUserSchema> = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters long"],
        },
        phone: {
            type: String,
             default: null
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
        },
        cart: [
            {
                quantity: {
                    type: Number,
                    default: 1,
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

// Pre-save hook to hash password before saving to the database
userSchema.pre<IUserSchema>("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next();
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

const User: Model<IUserSchema> = mongoose.model<IUserSchema>("User", userSchema);

export default User;
