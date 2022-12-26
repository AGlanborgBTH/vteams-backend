const mongoose = require("mongoose");


const CitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    center: {
      type: Object,
      required: true,
    },
    limit: {
      type: Object,
      required: true,
    },
    scooters : {
      type: Array,
      required: true,
    },
    parkings : {
      type: Array,
      required: true,
    },
    charing : {
      type: Array,
      required: true,
    },
  }
);


const Cities = mongoose.model("Cities", CitiesSchema);

module.exports = {
  Cities
};
