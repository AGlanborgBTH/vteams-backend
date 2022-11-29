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

const express = require("express");
const router = express.Router();

/*-----------------*/
// Cities Routes
/*-----------------*/

// Get all cities Route
router.get("/", getAll);

// Create a city Route
router.post("/", async (req, res) => {
  const data = new Cities({
    Name: req.body.Name,
    Center: req.body.Center,
    Limit: req.body.Limit,
    Scooters: req.body.Scooters,
    Parkings: req.body.Parkings,
    Charing: req.body.Charing,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get one city Route
router.get("/:id", async (req, res) => {
  try {
    const data = await Cities.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update one city Route
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Cities.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

