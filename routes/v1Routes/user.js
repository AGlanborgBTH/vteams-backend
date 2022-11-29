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
import getAllUsers from '../../modules/user/get'
import getOneUser from '../../modules/user/get'
import updateUser from '../../modules/user/patch'


// Get all cities Route
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.get("/:id", updateUser);



// Signup Route
router.post("/", async (req, res) => {
  const body = req.body;

  if (!(body.Email && body.Cryptedpassword)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }

  const user = new Users(body);
  const salt = await bcrypt.genSalt(10);

  user.Cryptedpassword = await bcrypt.hash(user.Cryptedpassword, salt);
  user.save().then((doc) => res.status(201).send(doc));
});

module.exports = router;
