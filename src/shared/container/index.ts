import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/links/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/links/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
