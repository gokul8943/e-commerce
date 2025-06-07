import { Model } from "mongoose";
import { CategoryRepository } from "../../interfaces/Admin/CategoryRepository";


export class CategoryRepositoryImpl implements CategoryRepository{
    private readonly categoryModel: Model<IcategorySchema>
    constructor (categoryModel: Model<IcategorySchema>){
        this.categoryModel = categoryModel
     }

     async addCategory(data: any): Promise<any> {
        try {
            const category = await this.categoryModel.create(data)
            return category
        } catch (error) {
            console.log(error);
        }
    }

    async updateCategory(data: any, categoryId: string): Promise<any> {
        try {
            const category = await this.categoryModel.findOneAndUpdate({ _id: categoryId }, data, { new: true })
            return category
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCategory(data: any, categoryId: string): Promise<any> {
        try {
            const category = await this.categoryModel.findOneAndDelete({ _id: categoryId })
            return category
        } catch (error) {
            console.log(error);
        }
    }
}