import { model, Schema } from "mongoose";
import { ICategorySchema } from "../../../adapters/interfaces/ICategorySchema";

const CategorySchema = new Schema<ICategorySchema>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true }, // URL-friendly name
    description: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: "Category", default: null }, // for subcategories
  },
  { timestamps: true }
);

export const Category = model<ICategorySchema>("Category", CategorySchema);

export default Category