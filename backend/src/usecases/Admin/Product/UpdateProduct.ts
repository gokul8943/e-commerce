import { ProductMgtRepository } from "../../../adapters/interfaces/Admin/ProductMgtRepository";

export class UpdateProduct{
    constructor (private productRepository: ProductMgtRepository) { }
    async execute(data: any, productId: string): Promise<any> {
        return this.productRepository.updateProduct(data, productId);
    }
}