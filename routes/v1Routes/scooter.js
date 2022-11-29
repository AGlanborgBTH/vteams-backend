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
const { Scooters } = require("../models/Scooters");
const router = express.Router();

/*-----------------*/
// Scooters Routes
/*-----------------*/

// Create a city Route
router.post("/post", async (req, res) => {
  const data = new Scooters({
    Name: req.body.Name,
    InUse: req.body.InUse,
    Velocity: req.body.Velocity,
    Battery: req.body.Battery,
    TimeInUse: req.body.TimeInUse,
    Charging: req.body.Charging,
    City: req.body.City,
    Location: req.body.Location,
    Destination: req.body.Destination,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all Scooters Route
router.get("/getAll", async (req, res) => {
  try {
    const data = await Scooters.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one city Route
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Scooters.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update one city Route
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Scooters.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
