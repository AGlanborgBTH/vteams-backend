/*
    Main file for version 1 of API

    This file will contain:
        Ports for CRUD of main collections

    Express:
        "/users"
            Leading to './v1Routes/user'
        "/scooters"
            Leading to './v1Routes/scooters'
        "/cities"
            Leading to './v1Routes/cities'
        "/logs"
            Leading to './v1Routes/logs'
        "/login"
            Leading to './v1Routes/login'
*/

const { cities } = require("./v1Routes/city");
const { users } = require("./v1Routes/user");
const { scooters } = require("./v1Routes/scooter");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(cors());


// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
app.use(express.json());


app.use("/cities", cities);
app.use("/users", users);
app.use("/scooters", scooters);
app.use("/login", login);

module.exports = app;