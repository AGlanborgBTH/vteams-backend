const { Users } = require("../../models/Users");


// Get all users
async function getAllUsers(req, res) {
    try {
        const data = await Users.find();
        res.json({ data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// Get One user
async function getOneUser(req, res) {
    try {
        const data = await Users.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
module.exports = { getAllUsers, getOneUser };