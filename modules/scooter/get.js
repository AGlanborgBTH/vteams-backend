const { Scooters } = require("../../models/Scooters");


//get All Scooters
async function getAllScooters(req, res) {
  try {
    const data = await Scooters.find();
    // io.emit("all_scooters", res.json({ data }) )
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


// Get One Scooter
async function getOneScooter(req, res) {
  try {
    const data = await Scooters.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllScooters, getOneScooter };
