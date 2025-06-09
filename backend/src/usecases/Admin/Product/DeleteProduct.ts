import { ProductMgtRepository } from "../../../adapters/interfaces/Admin/ProductMgtRepository";

export class DeleteProduct {
    constructor (private productRepository: ProductMgtRepository) { }
    async execute(data: any, productId: string): Promise<any> {
        return this.productRepository.deleteProduct(data, productId);
    }
}