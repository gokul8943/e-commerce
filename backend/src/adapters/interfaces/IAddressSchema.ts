import mongoose from "mongoose";

export interface IAddressSchema {
    fullName: string;
    phone: string;
    email?: string;

    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;

    isDefault?: boolean;
    addressType?: 'home' | 'work' | 'other';

    userId: mongoose.Types.ObjectId
}
