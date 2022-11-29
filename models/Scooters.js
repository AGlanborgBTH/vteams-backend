const mongoose = require("mongoose");


const ScootersSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    InUse: {
      type: Boolean,
      required: true,
    },
    Velocity: {
      type: Number,
      required: true,
    },
    Battery : {
      type: Number,
      required: true,
    },
    TimeInUse : {
      type: String,
      required: true,
    },
    Charging : {
      type: Boolean,
      required: true,
    },
    City : {
        type: String,
        required: true,
    },
    Location : {
        type: Object,
        required: true,
    },
    Destination : {
        type: Object,
        required: true,
    },
  }
);


const Scooters = mongoose.model("Scooters", ScootersSchema);

module.exports = {
  Scooters
};
