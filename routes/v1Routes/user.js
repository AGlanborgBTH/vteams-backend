/*
Main file for actions for endpoint 'user'

This file will contain:
    Ports for CRUD of users-collection

Imports:
    object from '../../modules/user'

Express:
    "/"
        GET
           fetch all users without wallet-column

            Middleware:
                Check for valid admin token

        POST
            add user (row) to collection

            Body:
                email
                firstname
                lastname
                password
                admin = 0
                wallet = 0

    "/:id"
        GET
            fetch user by user-:id

            Middleware:
                Check for valid token

        DELETE
            delete user by user-:id

            Middleware:
                Check for valid token

        PUT
            update user by user-:id

            Middleware:
                Check for valid token
*/

const express = require("express");
const { Users } = require("../models/Users");
const router = express.Router();
const bcrypt = require("bcrypt");

/*-----------------*/
// Users Routes
/*-----------------*/

// Get all users Route
router.get("/getAll", async (req, res) => {
  try {
    const data = await Users.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one user Route
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Users.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update one user Route
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Users.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Signup Route
router.post("/signup", async (req, res) => {
  const body = req.body;

  if (!(body.Email && body.Cryptedpassword)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }

  const user = new Users(body);
  const salt = await bcrypt.genSalt(10);

  user.Cryptedpassword = await bcrypt.hash(user.Cryptedpassword, salt);
  user.save().then((doc) => res.status(201).send(doc));
});


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

module.exports = router;
