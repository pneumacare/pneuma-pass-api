import { Router } from "express"
import ClinicController from "../controllers/clinic";

const clinicController = new ClinicController();

const router = Router();

router.post("/", clinicController.create)
router.get("/", clinicController.getOne)


export default router;