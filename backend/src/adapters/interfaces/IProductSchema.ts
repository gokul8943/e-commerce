import { Schema, Document } from "mongoose";

export interface IProductSchema extends Document {
  name: string;
  slug: string;
  description: string;
  brand: string;
  price: number;
  discount?: number;
  finalPrice: number;
  inStock: boolean;
  stockCount: number;
  images: string[];
  categories: Schema.Types.ObjectId[];
  tags: string[];
  isFeatured: boolean;
  ratings: number;
  ratingCount: number;
  createdAt: Date;
  updatedAt: Date;
}
