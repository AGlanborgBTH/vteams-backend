const { Users } = require("../../models/Users");


// Update One User By ID
async function updateUser (req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Users.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {updateUser};