const mongoose = require("mongoose");


const ScootersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
    inUse: {
      type: Boolean,
    },
    velocity: {
      type: Number,
    },
    battery : {
      type: Number,
    },
    timeInUse : {
      type: String,
    },
    charging : {
      type: Boolean,
    },
    city : {
        type: String,
    },
    location : {
        type: Object,
    },
    destination : {
        type: Object,
    },
  }
);


const Scooters = mongoose.model("Scooters", ScootersSchema);

module.exports = {
  Scooters
};
