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
const getAll = require ('../../modules/city/get')
const getOne = require ('../../modules/city/get')
const updateOne = require ('../../modules/city/patch')

const express = require("express");
const router = express.Router();

/*-----------------*/
// Cities Routes
/*-----------------*/

// Get all cities Route
router.get("/", (res, req) => {return getAll(res, req)});
router.get("/:id", (res, req) => {return getOne(res, req)});
router.patch("/:id", (res, req) => {return updateOne(res, req)});


module.exports = router;
