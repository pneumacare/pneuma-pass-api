import { Schema, model } from "mongoose"
export interface SchemaInterface {
    name: string;
    description: string;
    address: string;
    cacCode: string;
    city: string;
    state: string;
    country: string;
    contactPhone: string;
    contactEmail: string;
    referenceCode?: string;
    status?: string;
    updatedAt: Date;
    createdAt: Date;
}
const organizationSchema = new Schema<SchemaInterface>({
    name: {
        type: String,
        required: true
    },
    description: String,
    cacCode: String,
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
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

export default model("Organization", organizationSchema);