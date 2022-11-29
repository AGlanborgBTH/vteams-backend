/*
    Main file for actions for endpoint 'logs'

    This file will contain:
        Ports for CRUD of logs-collection

    Imports:
        object from '../../modules/logs'

    Express:
        "/"
            GET
                fetch all logs from collection

                Middleware:
                    Check for valid admin token

            POST
                add log (row) to collection

                Body:
                    recordId
                    description

                Middleware:
                    Check for valid token

        "/:id"
            GET
                fetch all logs by user-:id from collection

                Middleware:
                    Check for valid token
                    Check for login identity equals user-:id
*/
const getAllLogs = require ('../../modules/log/get')
const getOneLog = require ('../../modules/log/get')
const postLog = require ('../../modules/log/post')
const updateOneLog = require ('../../modules/log/patch')

const express = require("express");
const router = express.Router();

/*-----------------*/
// Logs Routes
/*-----------------*/

// Get all Logs Route
router.get("/", (res, req) => getAllLogs(res, req));
router.get("/:id", (res, req) => getOneLog(res, req));
router.post("/", (res, req) => postLog(res, req));
router.patch("/", (res, req) => updateOneLog(res, req));


module.exports = router;