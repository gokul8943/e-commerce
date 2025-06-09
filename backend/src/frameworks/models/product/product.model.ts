import { model, Schema } from "mongoose";
import { IProductSchema } from "../../../adapters/interfaces/IProductSchema";

const ProductSchema = new Schema<IProductSchema>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // for SEO URLs
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 }, // percentage
    finalPrice: { type: Number, required: true }, // calculated and saved
    inStock: { type: Boolean, default: true },
    stockCount: { type: Number, required: true },
    images: [{ type: String, required: true }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    ratings: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Optional: pre-save hook to auto-calculate finalPrice


export const Product = model<IProductSchema>("Product", ProductSchema);