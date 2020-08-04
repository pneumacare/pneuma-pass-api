import { Router } from "express"
import OrgController from "../controllers/organization";

const orgController = new OrgController();

const router = Router();

router.post("/", orgController.create)
router.get("/", orgController.getOne)


export default router;