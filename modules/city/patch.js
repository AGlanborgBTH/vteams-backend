const { Cities } = require("../models/Cities");

//get All cities
export default async function updateOne(req, res) {
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