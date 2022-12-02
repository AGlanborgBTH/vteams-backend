const mongoose = require("mongoose");


const UsersSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    Firstname: {
      type: String,
      required: true,
    },
    Surname: {
      type: String,
      required: true,
    },
    Cryptedpassword : {
      type: String,
      required: true,
    },
    Adminstatus : {
      type: Boolean,
      required: true,
      default: false,
    },
    Wallet : {
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
