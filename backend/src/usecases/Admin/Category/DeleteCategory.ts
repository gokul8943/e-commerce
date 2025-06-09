import { CategoryRepository } from "../../../adapters/interfaces/Admin/CategoryRepository";


export class DeleteCategory {
    constructor(private categoryRepository: CategoryRepository) { }
    execute(data: any, categoryId: string): Promise<any> {
        return this.categoryRepository.deleteCategory(data, categoryId);
    }
}