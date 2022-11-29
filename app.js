/*
    Main file for API

    This file will contain:
        Server start
        The main endpoints
        Socket initiation for scooters

    Express:
        "/v1"
            Leading to './routes/v1.js'
*/


require("dotenv").config();
const cities = require("./routes/cities");
const users = require("./routes/users");
const scooters = require("./routes/scooters");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected Successfully");
});

const app = express();
app.use(cors());


// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
app.use(express.json());


app.use("/cities", cities);
app.use("/users", users);
app.use("/scooters", scooters);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
