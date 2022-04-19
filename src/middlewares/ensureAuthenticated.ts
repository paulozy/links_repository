import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

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
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.SECRET_KEY) as IPayload;

    req.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
