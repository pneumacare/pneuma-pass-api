import express = require("express");
import { config } from 'dotenv';
import orgRoutes from "./app/routes/organization";
import firebaseApp from "./firebase";
import mongoose from "mongoose";
import { json, urlencoded } from "body-parser";

config()

const PORT = process.env.PORT;


mongoose.connect(process.env.MONGODB_CONNECTION_URL!, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


const app: express.Application = express();
app.use(json())
app.use(urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use('/organization', orgRoutes)
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
    console.log("Connected to firebaseApp", firebaseApp.name);

});
