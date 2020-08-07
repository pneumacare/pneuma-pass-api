import { Schema, model } from "mongoose"
export interface SchemaInterface {
    name: string;
    address: string;
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
    referenceCode: {
        type: String,
    },
    status: {
        type: String,
    },
    clinics: [{
        type: Schema.Types.ObjectId,
        ref: "Clinic"
    }],
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