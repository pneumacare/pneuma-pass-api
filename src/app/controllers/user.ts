import { Request, Response } from "express";
import User from "../models/user";
import Staff from "../models/staff";
import firebaseApp from "../../firebase"

class UserController {

    async create(req: Request, res: Response) {
        try {
            const { firstname, lastname, email, phone, pneumapass } = req.body;

            const idToken = req.headers['authorization'];

            if (!idToken) return res.status(400).json({ message: "No Id Token was found" });

            const idTokenResult = await firebaseApp.auth().verifyIdToken(idToken);

            const userSchema = new User({
                firstname,
                lastname,
                email,
                phone,
                pass: pneumapass,
                uid: idTokenResult.uid,
                status
            });

            const user = await userSchema.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error.message)
        }

    }
    async createAdmin(req: Request, res: Response) {
        try {
            const idToken = req.headers['authorization'];

            if (!idToken) return res.status(400).json({ message: "No Id Token was found" });

            const { email, organization } = req.body;

            const idTokenResult = await firebaseApp.auth().verifyIdToken(idToken);
            await firebaseApp.auth().setCustomUserClaims(idTokenResult.uid, { orgId: organization, role: "admin" })
            const staffSchema = new Staff({
                email,
                uid: idTokenResult.uid,
                organization,
            });

            const staff = await staffSchema.save();
            res.status(201).json(staff);

        } catch (error) {
            console.log(error.message)
            res.status(500).json(error.message)
        }
    }

    async getStaff(req: Request, res: Response) {
        try {
            const { email } = req.body;
            const userFound = await Staff.find({ email: email})

            if ((Array.isArray(userFound) && userFound.length === 0) || !userFound) {
                return res.status(404).json("User not found")
            }

            return res.status(200).json(userFound);
        }
        catch (error) {
            return res.status(400).json(error.message)
        }
    }

    getOne(req: Request, res: Response) {
        res.json("Test")
    }
    removeUser(req: Request, res: Response) {

    }
}

export default UserController;