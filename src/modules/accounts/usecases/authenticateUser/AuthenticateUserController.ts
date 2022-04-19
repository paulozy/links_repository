import { Response, Request } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticationInfo = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return res.json(authenticationInfo);
  }
}
