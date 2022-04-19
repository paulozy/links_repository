import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization: authHeader } = req.headers;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    verify(token, process.env.SECRET_KEY) as IPayload;
    next();
  } catch {
    throw new Error("Invalid token");
  }
}
