const { Logs } = require("../../models/Logs");

//get All Logs
async function getAllLogs(req, res) {
    try {
        const data = await Logs.find();
        res.json({ data });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// Get One Log
async function getOneLog(req, res) {
  try {
      const data = await Logs.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllLogs, getOneLog };