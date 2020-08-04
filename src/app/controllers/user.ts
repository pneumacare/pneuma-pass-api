import { Request, Response } from "express";
import User, { SchemaInterface } from "../models/user";

class UserController {

    async create(req: Request, res: Response) {
        try {
            const { firstname, lastname, email, phone, pass, status, uid, organization } = req.body;
            const userSchema = new User({
                firstname,
                lastname,
                email,
                phone,
                pass,
                uid,
                organization,
                status
            });
            const user = await userSchema.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
    getOne(req: Request, res: Response) {
        res.json("Test")
    }
}

export default UserController;