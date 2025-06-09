import { Schema, Document } from "mongoose";

export interface ICategorySchema extends Document {
  name: string;
  slug: string;
  description?: string;
  parent?: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}