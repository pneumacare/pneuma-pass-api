import { Request, Response } from "express";
import Service from "../models/services";

class ServiceController {

    async create(req: Request, res: Response) {
        try {
            const { name, description } = req.body;
            const serviceSchema = new Service({
                name,
                description
            });
            const service = await serviceSchema.save();
            res.status(201).json(service);
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
    getOne(req: Request, res: Response) {
        res.json("Genau")
    }
    getAll(req: Request, res: Response) {
        res.json("Genau")
    }
}

export default ServiceController;