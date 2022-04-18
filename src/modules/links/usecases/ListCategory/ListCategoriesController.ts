import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(_: Request, res: Response) {
    const categories = this.listCategoriesUseCase.execute();

    return res.json(categories);
  }
}
