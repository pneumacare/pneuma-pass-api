import { Router } from "express"
import UserController from "../controllers/user";

const userController = new UserController();

const router = Router();

router.post("/", userController.create)
router.post("/admin", userController.createAdmin)
router.post("/find-staff", userController.getStaff)
router.post("/findpass", userController.getOneByPass)


export default router;