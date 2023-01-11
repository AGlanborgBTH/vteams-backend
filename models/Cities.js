const mongoose = require("mongoose");


const CitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    center: {
      type: Object,
    },
    limit: {
      type: Object,
    },
    scooters: {
      type: Array,
    },
    parkings: {
      type: Array,
    },
    charing: {
      type: Array,
    },
  }
);


const Cities = mongoose.model("Cities", CitiesSchema);

module.exports = {
  Cities
};
