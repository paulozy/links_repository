import { Router } from "express";
import { CreateCategoryController } from "../modules/links/usecases/CreateCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/links/usecases/ListCategory/ListCategoriesController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
