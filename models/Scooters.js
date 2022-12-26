const mongoose = require("mongoose");


const ScootersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    inUse: {
      type: Boolean,
      required: true,
    },
    velocity: {
      type: Number,
      required: true,
    },
    battery : {
      type: Number,
      required: true,
    },
    timeInUse : {
      type: String,
      required: true,
    },
    charging : {
      type: Boolean,
      required: true,
    },
    city : {
        type: String,
        required: true,
    },
    location : {
        type: Object,
        required: true,
    },
    destination : {
        type: Object,
        required: true,
    },
  }
);


const Scooters = mongoose.model("Scooters", ScootersSchema);

module.exports = {
  Scooters
};
