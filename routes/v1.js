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

const cities = require("./v1Routes/city");
const users = require("./v1Routes/user");
const scooters = require("./v1Routes/scooter");
const login = require("./v1Routes/user");
const signup = require("./v1Routes/user");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const router = express.Router();

router.use(cors());


// Helmet helps you secure your Express apps by setting various HTTP headers.
router.use(helmet());
router.use(express.json());


router.use("/cities", cities);
router.use("/users", users);
router.use("/scooters", scooters);
router.use("/login", login);
router.use("/signup", signup);


module.exports = router;