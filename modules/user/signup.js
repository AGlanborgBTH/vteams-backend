const { Users } = require("../../models/Users");
const bcrypt = require("bcrypt");

// Signup Function
async function postSignUp (req, res) {
    const body = req.body;

    if (!(body.email && body.cryptedpassword)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    if (!body.gitHub) {
      //check if all fields are filled, email, firstname, surname, cryptedpassword
      if (!(body.email && body.firstname && body.surname && body.cryptedpassword)) {
        return res.status(400).send({ error: "You're missing a field" });
      }
    }
    const user = new Users(body);
    //check if written email exists in database, if so return error message
    const emailExists = await Users.findOne({ email: body.email}).exec();
    if (emailExists) {
      return res.status(400).send({ error: "email already exists, try with another one" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);

    user.cryptedpassword = await bcrypt.hash(user.cryptedpassword, salt);
    user.save().then((doc) => res.status(201).send(doc));
}

module.exports = {
  postSignUp
};
