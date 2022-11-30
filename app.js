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
const ver1 = require("./routes/v1.js");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
const cors = require("cors");
const express = require("express");


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected Successfully");
});

const Server = express();
Server.use(cors());
Server.use(express.json());

Server.use("/v1", ver1)

Server.listen(port, () => {
  console.log(`Server Started at ${port}`);
});