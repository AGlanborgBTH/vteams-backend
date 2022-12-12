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
    cryptedpassword : {
      type: String,
      required: true,
    },
    adminstatus : {
      type: Boolean,
      required: true,
      default: false,
    },
    wallet : {
      type: Number,
      default: 0,
      required: true,
    },
  }
);


const Users = mongoose.model("Users", UsersSchema);

module.exports = {
  Users
};
