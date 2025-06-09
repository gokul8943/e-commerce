import { ProductMgtRepository } from "../../../adapters/interfaces/Admin/ProductMgtRepository";

export class AddProduct {
    constructor(private productRepository: ProductMgtRepository) { }
    async execute(data: any): Promise<any> {
        return this.productRepository.addProduct(data)
    }
}