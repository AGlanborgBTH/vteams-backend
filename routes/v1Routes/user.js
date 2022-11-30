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
const router = express.Router();

/*-----------------*/
// Users Routes
/*-----------------*/
const {getAllUsers} = require ('../../modules/user/get')
const {getOneUser} = require ('../../modules/user/get')
const {updateUser} = require ('../../modules/user/patch')
const {postSignUp} = require ('../../modules/user/signup')
const {postLogin} = require ('../../modules/user/login')


// Get all cities Route
router.get("/", (req, res) => {return getAllUsers(req, res)});
router.get("/:id", (req, res) => {return getOneUser(req, res)});
router.patch("/:id", (req, res) => {return updateUser(req, res)});
router.post("/", (req, res) => {return postSignUp(req, res)});
router.post("/:id", (req, res) => {return postLogin(req, res)});



module.exports = router;
