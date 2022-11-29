const mongoose = require("mongoose");


const CitiesSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Center: {
      type: Object,
      required: true,
    },
    Limit: {
      type: Object,
      required: true,
    },
    Scooters : {
      type: Array,
      required: true,
    },
    Parkings : {
      type: Array,
      required: true,
    },
    Charing : {
      type: Array,
      required: true,
    },
  }
);


const Cities = mongoose.model("Cities", CitiesSchema);

module.exports = {
  Cities
};
