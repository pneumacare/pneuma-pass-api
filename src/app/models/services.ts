import { Schema, model } from "mongoose"
export interface SchemaInterface {
    name: string;
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