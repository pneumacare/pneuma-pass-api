import { Router } from "express"
import UserController from "../controllers/user";

const userController = new UserController();

const router = Router();

router.post("/", userController.create)
router.get("/", userController.getOne)


export default router;