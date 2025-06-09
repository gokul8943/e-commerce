import { Router } from "express";
import { CategoryRepositoryImpl } from "../../repositories/Admin/CategoryRepositoryImpl";
import { UpdateCategory } from "../../../usecases/Admin/Category/UpdateCategory";
import { AddCategory } from "../../../usecases/Admin/Category/AddCategory";
import { DeleteCategory } from "../../../usecases/Admin/Category/DeleteCategory";
import { CategoryController } from "../../controllers/Admin/CategoryController";
import  categoryModel  from "../../../frameworks/models/category/category.model";


const categoryRepository = new CategoryRepositoryImpl(categoryModel);
const addCategoryUseCase = new AddCategory(categoryRepository);
const updateCategoryUseCase = new UpdateCategory(categoryRepository);
const deleteCategoryUseCase = new DeleteCategory(categoryRepository);
const categoryController = new CategoryController(addCategoryUseCase, updateCategoryUseCase, deleteCategoryUseCase);

const router = Router();

router.post('/add-category', async (req, res) => {
    try {
        categoryController.addCategory(req, res)
    } catch (error) {
        console.log(error);
        
    }
})  

router.put('/update-category', async (req, res) => {
    try {
        categoryController.updateCategory(req, res)
    } catch (error) {
        
    }
})

router.post('/delete-category', async (req, res) => {
    try {
        categoryController.deleteCategory(req, res)
    } catch (error) {
        
    }
})