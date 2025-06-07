import { Model } from "mongoose";


export class CategoryRepositoryImpl implements CategoryRepository{
    private readonly categoryModel: Model<IcategorySchema>
    constructor (categoryModel: Model<IcategorySchema>){ }
}