import express = require("express");
import { config } from 'dotenv';
import orgRoutes from "./app/routes/organization";
import serviceRoutes from "./app/routes/services";
import userRoutes from "./app/routes/user";
import firebaseApp from "./firebase";
import mongoose from "mongoose";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";

config()

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_CONNECTION_URL!, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))


const app: express.Application = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan(function (tokens, req, res) {
    return [
        chalk.green.bold(tokens.method(req, res)),
        chalk.red.bold(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        chalk.yellow(tokens['response-time'](req, res) + ' ms'),
    ].join(' ');
}));
app.use('/clinic', orgRoutes)
app.use('/user', userRoutes)
app.use('/service', serviceRoutes)

app.get("/", function (req, res) {
    res.send("Pneuma API!");
});

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
    console.log("Connected to firebaseApp", firebaseApp.name);

});
