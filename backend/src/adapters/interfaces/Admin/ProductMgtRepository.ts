export interface ProductMgtRepository {
    addProduct(data: any): Promise<any>;
    updateProduct(data: any, productId: string): Promise<any>;
    deleteProduct(data: any ,productId : string): Promise<any>;
}