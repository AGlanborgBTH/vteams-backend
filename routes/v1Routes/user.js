/*-----------------*/
// Users Routes
/*-----------------*/

const express = require("express");
const router = express.Router();

const {getAllUsers} = require ('../../modules/user/get')
const {getOneUser} = require ('../../modules/user/get')
const {updateUser} = require ('../../modules/user/patch')
const {postSignUp} = require ('../../modules/user/signup')
const {postLogin} = require ('../../modules/user/login')
const {getOauthLogin} = require ('../../modules/user/auth')
const {deleteOneUser} = require ('../../modules/user/delete')


// Get all Users Route
router.get("/", (req, res) => {return getAllUsers(req, res)});
router.get("/oauth-callback", (req, res) => {return getOauthLogin(req, res)});
router.get("/:id", (req, res) => {return getOneUser(req, res)});
router.delete("/:id", (req, res) => {return deleteOneUser(req, res)});
router.patch("/:id", (req, res) => {return updateUser(req, res)});
router.post("/signup", (req, res) => {return postSignUp(req, res)});
router.post("/login", (req, res) => {return postLogin(req, res)});



module.exports = router;
