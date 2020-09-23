import { Schema, model } from "mongoose"
import { SchemaInterface } from "./user";

export interface StaffInterface extends SchemaInterface {
    organization: string;
}
const staffSchema = new Schema<StaffInterface>({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },

    status: {
        type: String,
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    organization: {
        type: String,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model("Staff", staffSchema);