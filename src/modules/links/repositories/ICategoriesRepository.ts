import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "../repositories/implementations/CategoriesRepository";

export interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}
