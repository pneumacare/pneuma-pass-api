import { Request, Response } from "express";
import Clinic from "../models/clinic";

class ClinicController {

    async create(req: Request, res: Response) {
        try {
            const { name, address, status } = req.body;
            const clinicSchema = new Clinic({
                name,
                address,
                status
            });
            const clinic = await clinicSchema.save();
            res.status(201).json(clinic);
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
    getOne(req: Request, res: Response) {
        res.json("Genau")
    }
}

export default ClinicController;