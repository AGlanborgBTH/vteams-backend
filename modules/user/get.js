const { Users } = require("../models/Cities");


// Get all users
export default async function getAllUsers(req, res) {
    try {
        const data = await Users.find();
        res.json({ data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// Get One user
export default async function getOneUser(req, res) {
    try {
        const data = await Users.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}