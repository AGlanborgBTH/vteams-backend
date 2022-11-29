const { Cities } = require("../models/Cities");

export default async function getAll(req, res) {
    try {
        const data = await Cities.find();
        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default async function getOne(req, res) {
    
}