const mongoose = require("mongoose");


const UsersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
    },
    surname: {
      type: String,
    },
    cryptedpassword: {
      type: String,
      required: true,
    },
    adminstatus: {
      type: Boolean,
      default: false,
    },
    wallet: {
      type: Number,
      default: 100,
    },
  }
);


const Users = mongoose.model("Users", UsersSchema);

module.exports = {
  Users
};
