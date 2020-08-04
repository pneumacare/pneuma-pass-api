import { initializeApp, credential } from "firebase-admin";
import { readFile } from 'fs'
import util from 'util';
import { resolve } from "path"

const readFilePromise = util.promisify(readFile);

const initialize = async () => {
    const serviceAccount = await readFilePromise(resolve("../../google-service-account.json"))
    initializeApp({
        credential: credential.cert(serviceAccount.toString()),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    })
}