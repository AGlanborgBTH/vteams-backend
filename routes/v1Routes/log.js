/*-----------------*/
// Logs Routes
/*-----------------*/

const { getAllLogs } = require('../../modules/log/get')
const { getOneLog } = require('../../modules/log/get')
const { postLog } = require('../../modules/log/post')
const { updateOneLog } = require('../../modules/log/patch')

const express = require("express");
const router = express.Router();


// Get all Logs Route
router.get("/", (res, req) => { return getAllLogs(res, req) });
router.get("/:id", (res, req) => { return getOneLog(res, req) });
router.post("/", (res, req) => { return postLog(res, req) });
router.patch("/:id", (res, req) => { return updateOneLog(res, req) });


module.exports = router;