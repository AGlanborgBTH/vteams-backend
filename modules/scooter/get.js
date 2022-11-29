const { Scooters } = require("../models/Scooters");

//get All Scooters
export default async function getAllScooters(req, res) {
    try {
        const data = await Scooters.find();
        res.json({ data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


// Get One Scooter
export default async function getOneScooter(req, res) {
    try {
        const data = await Scooters.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
