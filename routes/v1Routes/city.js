/*
    Main file for actions for endpoint 'city'

    This file will contain:
        Ports for CRUD of cities-collection

    Imports:
        object from '../../modules/city'

    Express:
        "/"
            GET
                fetch all cities

        "/:id"
            GET
                fetch city by :id

            PUT
                update city by :id

                Body:
                    cityId

                Middleware:
                    Check for project manager identity
*/
import getAll from '../../modules/city/get'
import getOne from '../../modules/city/get'
import updateOne from '../../modules/city/patch'

const express = require("express");
const router = express.Router();

/*-----------------*/
// Cities Routes
/*-----------------*/

// Get all cities Route
router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id", updateOne);


module.exports = router;
