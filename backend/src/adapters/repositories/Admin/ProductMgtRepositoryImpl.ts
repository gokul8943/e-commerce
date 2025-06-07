import { Model } from "mongoose";
import { ProductMgtRepository } from "../../interfaces/Admin/ProductMgtRepository";


export class ProductMgtRepositoryImpl implements ProductMgtRepository {
    private readonly ProductModel: any

    constructor(productModel: Model<IproductSchema>) {
        this.ProductModel = productModel
    }

    async addProduct(data: any): Promise<any> {
        try {
            const product = await this.ProductModel.create(data)
            return product
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(data: any, productId: string): Promise<any> {
        try {
            const product = await this.ProductModel.findOneAndUpdate({ _id: productId }, data, { new: true })
            return product
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(data: any, productId: string): Promise<any> {
        try {
            const product = await this.ProductModel.findOneAndDelete({ _id: productId })
            return product
        } catch (error) {
            console.log(error);
        }
    }
}