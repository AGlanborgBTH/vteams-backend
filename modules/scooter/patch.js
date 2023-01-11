const { Scooters } = require("../../models/Scooters");

//Update Scooter By ID
async function updateOneScooter(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Scooters.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  updateOneScooter
};
