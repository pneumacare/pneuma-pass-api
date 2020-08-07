import { Schema, model } from "mongoose"
import { SchemaInterface } from "./user";

export interface StaffInterface extends SchemaInterface {
    organization: string;
}
const staffSchema = new Schema<StaffInterface>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    organization: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default model("Staff", staffSchema);