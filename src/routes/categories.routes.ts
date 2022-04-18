import { Router } from "express";
import { CategoriesRepository } from "../modules/links/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/links/usecases/CreateCategory";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.list();

  return res.json(categories);
});
