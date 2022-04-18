import { Router } from "express";
import { createCategoryController } from "../modules/links/usecases/CreateCategory";
import { listCategoriesController } from "../modules/links/usecases/ListCategory";

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});
