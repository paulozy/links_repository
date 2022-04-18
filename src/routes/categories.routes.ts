import { Router } from "express";
import { CategoriesRepository } from "../modules/links/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/links/services/CreateCategoryService";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (_, res) => {
  const categories = categoriesRepository.list();

  return res.json(categories);
});
