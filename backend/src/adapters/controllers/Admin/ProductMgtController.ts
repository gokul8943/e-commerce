import { Request, Response } from "express";
import { AddProduct } from "../../../usecases/Admin/Product/AddProduct";
import { DeleteProduct } from "../../../usecases/Admin/Product/DeleteProduct";
import { UpdateProduct } from "../../../usecases/Admin/Product/UpdateProduct";


export class ProductMgtController {
    constructor(
        private addProductUseCase: AddProduct,
        private updateProductUseCase: UpdateProduct,
        private deleteProductUseCase: DeleteProduct
    ) { }

    async addProduct(req: Request, res: Response) {
        const { data } = req.body
        try {
            const product = await this.addProductUseCase.execute(data);
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            } else {
                res.status(200).json({ message: "Product added successfully", product });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }

    async updateProduct(req: Request, res: Response) {
        const { productId } = req.params
        const { data } = req.body
        try {
            const product = await this.updateProductUseCase.execute(data, productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            } else {
                res.status(200).json({ message: "Product updated successfully", product });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const { productId } = req.params
        try {
            const product = await this.deleteProductUseCase.execute({}, productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            } else {
                res.status(200).json({ message: "Product deleted successfully", product });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }
}