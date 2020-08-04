import express = require("express");
import { config } from 'dotenv';
import orgRoutes from "./app/routes/organization";
config()
import firebaseApp from "./firebase";

const PORT = process.env.PORT;
const app: express.Application = express();
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use('/organization', orgRoutes)
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
    console.log("Connected to firebaseApp", firebaseApp.name);

});
