import { Router } from "express";
import { listCategoriesController } from "../modules/links/usecases/ListCategory";
import { CreateCategoryController } from "../modules/links/usecases/CreateCategory/CreateCategoryController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});
