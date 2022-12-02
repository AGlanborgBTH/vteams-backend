const cities = require("./v1Routes/city");
const logs = require("./v1Routes/log");
const users = require("./v1Routes/user");
const scooters = require("./v1Routes/scooter");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();

app.use(bodyParser.json());
router.use(cors());


// Helmet helps you secure your Express apps by setting various HTTP headers.
router.use(helmet());
router.use(express.json());


router.use("/cities", cities);
router.use("/users", users);
router.use("/scooters", scooters);
router.use("/logs", logs);

module.exports = router;