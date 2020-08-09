import { initializeApp, credential, ServiceAccount } from "firebase-admin";
import fs from "fs"

const content = fs.readFileSync(__dirname + "/google-service-account.json")

const serviceAccount = JSON.parse(content.toString());

const firebaseApp = initializeApp({
    credential: credential.cert(serviceAccount as ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})
export default firebaseApp;