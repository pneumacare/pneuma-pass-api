import { Schema, model } from "mongoose"
export interface SchemaInterface {
    name: string;
    description: string;
    updatedAt: Date;
    createdAt: Date;
}
const serviceSchema = new Schema<SchemaInterface>({
    name: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: "Clinic"
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export default model("Service", serviceSchema);