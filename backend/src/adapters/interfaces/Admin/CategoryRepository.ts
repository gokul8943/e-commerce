
export interface CategoryRepository {
    addCategory(data: any): Promise<any>
    updateCategory(data: any, categoryId: string): Promise<any>
    deleteCategory(data: any, categoryId: string): Promise<any>
}