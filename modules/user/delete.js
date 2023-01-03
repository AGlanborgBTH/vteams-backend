const { Users } = require("../../models/Users");


// Get all users
async function deleteOneUser(req, res) {
    try {
        const data = await Users.deleteOne({ _id: req.params.id});
        res.json({ data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


module.exports = { deleteOneUser };