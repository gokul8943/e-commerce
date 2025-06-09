import { Request, Response } from "express";
import { AddCategory } from "../../../usecases/Admin/Category/AddCategory";
import { DeleteCategory } from "../../../usecases/Admin/Category/DeleteCategory";
import { UpdateCategory } from "../../../usecases/Admin/Category/UpdateCategory";

export class CategoryController {
    constructor(
        private readonly addCategoryUseCase: AddCategory,
        private readonly updateCategoryUseCase: UpdateCategory,
        private readonly deleteCategoryUseCase: DeleteCategory
    ) { }

    async addCategory(req: Request, res: Response) {
        const { data } = req.body
        try {
            const category = await this.addCategoryUseCase.execute(data);
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            } else {
                res.status(200).json({ message: "Category added successfully", category });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }

    async updateCategory(req: Request, res: Response) {
        const { categoryId } = req.params
        const { data } = req.body
        try {
            const category = await this.updateCategoryUseCase.execute(data, categoryId);
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            } else {
                res.status(200).json({ message: "Category updated successfully", category });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }

    async deleteCategory(req: Request, res: Response) {
        const { categoryId } = req.params
        try {
            const category = await this.deleteCategoryUseCase.execute({}, categoryId);
            if (!category) {
                return res.status(404).json({ message: "Category not found" })
            } else {
                res.status(200).json({ message: "Category deleted successfully", category });
            }
        } catch (error) {
            res.status(500).json({ message: "Error in routes", error })
        }
    }
}