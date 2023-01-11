/*-----------------*/
// Cities Routes
/*-----------------*/

const { getAll } = require('../../modules/city/get')
const { getOne } = require('../../modules/city/get')
const { updateOne } = require('../../modules/city/patch')

const express = require("express");
const router = express.Router();


// Get all cities Route
router.get("/", (res, req) => { return getAll(res, req) });
router.get("/:id", (res, req) => { return getOne(res, req) });
router.patch("/:id", (res, req) => { return updateOne(res, req) });


module.exports = router;
