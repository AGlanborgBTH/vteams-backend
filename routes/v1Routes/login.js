/*
Main file for actions for endpoint 'login'

This file will contain:
    Ports for loging in users

Imports:
    object from '../../modules/login'

Express:
    "/:id"
        POST
            Check for valid email and password
            Return token, email and user-id

            Body:
                email
                password
*/

const express = require("express");
const { Users } = require("../models/Users");
const router = express.Router();
const bcrypt = require("bcrypt");

// Login Route
router.post("/login", async (req, res) => {
    const body = req.body;
    const user = await Users.findOne({ Email: body.Email });
    if (user) {
      const validPassword = await bcrypt.compare(body.Cryptedpassword, user.Cryptedpassword);
      if (validPassword) {
        res.status(200).json({ message: "Your Password Is Valid, Welcome Stranger" });
      } else {
        res.status(400).json({ error: "You Have Entered An Invalid Email or Password" });
      }
    }
  });