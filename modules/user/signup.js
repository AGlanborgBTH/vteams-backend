const { Users } = require("../../models/Users");
const bcrypt = require("bcrypt");

// Signup Function
async function postSignUp (req, res) {
    const body = req.body;

    if (!(body.Email && body.Cryptedpassword)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    const user = new Users(body);
    const salt = await bcrypt.genSalt(10);

    user.Cryptedpassword = await bcrypt.hash(user.Cryptedpassword, salt);
    user.save().then((doc) => res.status(201).send(doc));
}

module.exports = {
  postSignUp
};
