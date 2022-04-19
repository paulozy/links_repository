import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "../repositories/implementations/CategoriesRepository";

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}
