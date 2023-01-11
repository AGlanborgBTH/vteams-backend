const mongoose = require("mongoose");


const LogsSchema = new mongoose.Schema(
  {
    recordID: {
      type: String
    },
    description: {
      type: String
    },
    cityID: {
      type: String
    },
    customerID: {
      type: String
    },
    scooterID: {
      type: String
    },
    scooterName: {
      type: String
    },
    timeStart: {
      type: String,
    },
    locationStart: {
      type: Object
    },
    timeEnd: {
      type: String,
    },
    locationEnd: {
      type: Object
    },
    distanceTravelled: {
      type: String
    },
    totalCost: {
      type: String
    },
  });



const Logs = mongoose.model("Logs", LogsSchema);

module.exports = {
  Logs
};
