import { Router } from "express";
import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.use(ensureAuthenticated);
usersRoutes.patch(
  "/avatar",
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);
