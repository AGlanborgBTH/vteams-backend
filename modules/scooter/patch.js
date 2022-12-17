const { Scooters } = require("../../models/Scooters");

//Update Scooter By ID
async function updateOneScooter(req, res) {;
  const update = req.body;
  try {
    const result = await Scooters.updateMany({ inUse: true }, { $set: update });
    res.send({ modifiedCount: result.modifiedCount });
    console.log({ modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}


module.exports = {
  updateOneScooter
};