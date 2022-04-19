import { Router } from "express";
import { authenticationRoutes } from "./authentication.routes";
import { categoriesRoutes } from "./categories.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/users", usersRoutes);
router.use(authenticationRoutes);
