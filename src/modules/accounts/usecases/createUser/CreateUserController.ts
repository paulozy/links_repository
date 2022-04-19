import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ name, username, email, password });

    return res.status(201).send();
  }
}
