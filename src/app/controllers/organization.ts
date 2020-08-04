import { Request, Response } from "express";

class OrganizationController {

    create(req: Request, res: Response) {
        res.json("Ich heise")
    }
    getOne(req: Request, res: Response) {
        res.json("Genau")
    }
}

export default OrganizationController;