/*
Main file for actions for endpoint 'scooter'

This file will contain:
    Ports for CRUD of scooters-collection

Imports:
    object from '../../modules/scooter'

Express:
    "/"
        GET
            If:
                User:
                    Fetch all scooters without inUseBy- and timeInUse-value
                Admin:
                    Fetch all scooters

            Middleware:
                Check for valid token

        POST
            add scooter (row) to collection

            Body:
                name
                inUse = false
                inUseBy = null
                velocity = 0
                battery
                charging
                city
                location {
                    long,
                    lat
                }
                destination = {}

            Middleware:
                Check for project manager identity

    "/:id"
        GET
            If:
                User:
                    Fetch scooter by :id without inUseBy- and timeInUse-value
                Admin:
                    Fetch scooter by :id

            Middleware:
                Check for valid token

        GET
            update scooter content by scooter-:id

            Middleware:
                Check for valid token
*/

const express = require("express");
const { Scooters } = require("../../models/Scooters");
const router = express.Router();

/*-----------------*/
// Scooters Routes
/*-----------------*/

const getAllScooters = require ('../../modules/scooter/get')
const getOneScooter = require ('../../modules/scooter/get')
const updateOneScooter = require ('../../modules/scooter/patch')



router.get("/", (req, res) => getAllScooters(req, res));
router.get("/:id", (req, res) => getOneScooter(req, res));
router.patch("/:id", (req, res) => updateOneScooter(req, res));


module.exports = router;
