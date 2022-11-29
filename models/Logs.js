const mongoose = require("mongoose");


const LogsSchema = new mongoose.Schema(
  {
    RecordID: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    CityID: {
      type: String,
      required: true,
    },
    CustomerID : {
      type: Array,
      required: true,
    },
    ScooterID : {
      type: Array,
      required: true,
    },
    TimeStart : {
      type: Date,
      required: true,
      timestamp: true,
    },
    LocationStart : {
      type: String,
      required: true,
    },
    TimeEnd : {
      type: Date,
      required: true,
      timestamp: true,
    },
    LocationEnd : {
      type: String,
      required: true,
    },
    DistanceTravelled : {
      type: String,
      required: true,
    },
    TotalCost : {
      type: String,
      required: true,
    },
});



const Logs = mongoose.model("Logs", LogsSchema);

module.exports = {
  Logs
};
