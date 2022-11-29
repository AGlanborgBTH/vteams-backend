const { Cities } = require("../models/Cities");

//get All cities
export default async function getAll(req, res) {
    try {
        const data = await Cities.find();
        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Get One City
export default async function getOne(req, res) {
    try {
        const data = await Cities.findById(req.params.id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
