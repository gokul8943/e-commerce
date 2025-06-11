import { Schema, model, Types } from 'mongoose';
import { IAddressSchema } from '../../../adapters/interfaces/IAddressSchema'; // Adjust path as needed

const addressSchema = new Schema<IAddressSchema>(
    {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },

        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },

        isDefault: { type: Boolean, default: false },
        addressType: {
            type: String,
            default: 'home',
        },

        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true,
    }
);

export const AddressModel = model<IAddressSchema>('Address', addressSchema);

export default AddressModel