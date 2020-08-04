import { Schema, model } from "mongoose"
export interface SchemaInterface {
    name: string;
    address: string;
    status: string;
    updatedAt: Date;
    createdAt: Date;
}
const organizationSchema = new Schema<SchemaInterface>({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
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

export default model("Organizations", organizationSchema);