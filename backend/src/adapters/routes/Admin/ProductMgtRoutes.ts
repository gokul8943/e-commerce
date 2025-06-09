import { Router } from "express";
import { AddProduct } from "../../../usecases/Admin/Product/AddProduct";

import { ProductMgtRepositoryImpl } from "../../../adapters/repositories/Admin/ProductMgtRepositoryImpl";
import { UpdateProduct } from "../../../usecases/Admin/Product/UpdateProduct";
import { DeleteProduct } from "../../../usecases/Admin/Product/DeleteProduct";
import { ProductMgtController } from "../../controllers/Admin/ProductMgtController";
import productModel from "../../../frameworks/models/product/product.model";

const productRepository = new ProductMgtRepositoryImpl(productModel);
const addProductUseCase = new AddProduct(productRepository);
const updateProductUseCase = new UpdateProduct(productRepository);
const deleteProductUseCase = new DeleteProduct(productRepository);
const productController = new ProductMgtController(addProductUseCase, updateProductUseCase, deleteProductUseCase);

const router = Router();

router.post('/add-product', async (req, res) => {
    try {
        productController.addProduct(req, res)
    } catch (error) {
        console.log(error);
        
    }
})
export default router