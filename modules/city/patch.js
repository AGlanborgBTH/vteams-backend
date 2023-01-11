const { Cities } = require("../../models/Cities");

//Update One City By ID
async function updateOne(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Cities.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = updateOne;