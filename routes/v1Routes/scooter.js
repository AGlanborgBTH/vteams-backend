/*-----------------*/
// Scooters Routes
/*-----------------*/

const express = require("express");
const router = express.Router();

const {getAllScooters} = require ('../../modules/scooter/get')
const {getOneScooter} = require ('../../modules/scooter/get')
const {updateOneScooter} = require ('../../modules/scooter/patch')



router.get("/", (req, res) => {return getAllScooters(req, res)});
router.get("/:id", (req, res) => {return getOneScooter(req, res)});
router.patch("/:id", (req, res) => {return updateOneScooter(req, res)});


module.exports = router;
