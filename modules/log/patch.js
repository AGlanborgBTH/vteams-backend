const { Logs } = require("../../models/Logs");

//Update Log By ID
async function updateOneLog(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Logs.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { updateOneLog };