import { CategoryRepository } from "../../../adapters/interfaces/Admin/CategoryRepository";


export class UpdateCategory {
    constructor( private categoryRepository: CategoryRepository){ }
    async execute(data: any, categoryId: string): Promise<any> {
        return this.categoryRepository.updateCategory(data, categoryId);
    }
}