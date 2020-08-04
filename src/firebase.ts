import { initializeApp, credential, ServiceAccount } from "firebase-admin";
import serviceAccount from "../google-service-account.json";
const firebaseApp = initializeApp({
    credential: credential.cert(serviceAccount as ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})
export default firebaseApp;