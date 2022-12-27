const { Logs } = require("../../models/Logs");

// Post Route For Logs
async function postLog(req, res) {
    const data = new Logs({
        recordID: req.body.recordID,
        description: req.body.description,
        cityID: req.body.cityID,
        customerID: req.body.customerID,
        scooterID: req.body.scooterID,
        timeStart: req.body.timeStart,
        locationStart: req.body.locationStart,
        timeEnd: req.body.timeEnd,
        locationEnd: req.body.locationEnd,
        distanceTravelled: req.body.distanceTravelled,
        totalCost: req.body.totalCost
      });
      
      try {
        const dataToSave = await data.save();
        res.status(200).json({data: dataToSave, id: data._id})
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

module.exports = { postLog };