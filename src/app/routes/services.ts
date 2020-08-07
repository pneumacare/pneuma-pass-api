import { Router } from "express"
import ServiceController from "../controllers/services";

const serviceController = new ServiceController();

const router = Router();

router.post("/", serviceController.create)
router.get("/", serviceController.getOne)
router.get("/", serviceController.getAll)


export default router;