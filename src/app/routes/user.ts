import { Router } from "express"
import UserController from "../controllers/user";

const userController = new UserController();

const router = Router();

router.post("/", userController.create)
router.post("/admin", userController.createAdmin)
router.post("/login", userController.getStaff)


export default router;