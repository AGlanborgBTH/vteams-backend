const mongoose = require("mongoose");


const LogsSchema = new mongoose.Schema(
  {
    recordID: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cityID: {
      type: String,
      required: true,
    },
    customerID : {
      type: Array,
      required: true,
    },
    scooterID : {
      type: Array,
      required: true,
    },
    timeStart : {
      type: Date,
      required: true,
      timestamp: true,
    },
    locationStart : {
      type: String,
      required: true,
    },
    timeEnd : {
      type: Date,
      required: true,
      timestamp: true,
    },
    locationEnd : {
      type: String,
      required: true,
    },
    distanceTravelled : {
      type: String,
      required: true,
    },
    totalCost : {
      type: String,
      required: true,
    },
});



const Logs = mongoose.model("Logs", LogsSchema);

module.exports = {
  Logs
};
