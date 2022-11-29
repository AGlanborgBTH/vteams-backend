const { Logs } = require("../../models/Logs");

// post a new log
async function postLog(req, res) {
    const data = new Logs({
        RecordID: req.body.RecordID,
        Description: req.body.Description,
        CityID: req.body.CityID,
        CustomerID: req.body.CustomerID,
        ScooterID: req.body.ScooterID,
        TimeStart: req.body.TimeStart,
        LocationStart: req.body.LocationStart,
        TimeEnd: req.body.TimeEnd,
        LocationEnd: req.body.LocationEnd,
        DistanceTravelled: req.body.DistanceTravelled,
        TotalCost: req.body.TotalCost
      });
      try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

module.exports = { postLog };