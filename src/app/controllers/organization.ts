import { Request, Response } from "express";
import Organization from "../models/organization";
import organization from "../models/organization";

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
                contactEmail
                 } = req.body;

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
    async getAll(req: Request, res: Response) {
        const clinics = await organization.find({});
        res.status(200).json(clinics)
    }
}

export default OrganizationController;