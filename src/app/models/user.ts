import { Schema, model } from "mongoose"

export interface SchemaInterface {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    pass: string;
    status: string;
    organization?: string
    uid: string;
    updatedAt: Date;
    createdAt: Date;
}
const userSchema = new Schema<SchemaInterface>({
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

export default model("Users", userSchema);