import { Request, Response } from "express";
import Organization from "../models/organization";

class OrganizationController {

    async create(req: Request, res: Response) {
        try {
            const { name,
                description,
                address,
                cacCode,
                city,
                state,
                country,
                contactPhone,
                contactEmail,
                referenceCode } = req.body;

            const orgSchema = new Organization({
                name,
                description,
                address,
                cacCode,
                city,
                state,
                country,
                contactPhone,
                contactEmail,
                referenceCode,
            });
            const organization = await orgSchema.save();
            res.status(201).json(organization);
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
    getOne(req: Request, res: Response) {
        res.json("Genau")
    }
}

export default OrganizationController;