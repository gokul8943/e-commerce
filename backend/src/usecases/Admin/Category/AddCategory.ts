import { CategoryRepository } from "../../../adapters/interfaces/Admin/CategoryRepository";

export class AddCategory {
    constructor(private categoryRepository: CategoryRepository) { }
    async execute(data: any): Promise<any> {
        return this.categoryRepository.addCategory(data);
    }
}