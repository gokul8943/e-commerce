import mongoose, { Document } from "mongoose";

interface CartItem {
    quantity: number;
    product: mongoose.Types.ObjectId;
}
export interface IUserSchema extends Document {
    name: string;
    email: string;
    password: string;
    phone: string,
    cart: CartItem[];
    role: "user" | "admin";
    comparePassword(password: string): Promise<boolean>;
}