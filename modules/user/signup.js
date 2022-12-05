const { Users } = require("../../models/Users");
const bcrypt = require("bcrypt");

// Signup Function
async function postSignUp (req, res) {
    const body = req.body;

    if (!(body.Email && body.Cryptedpassword)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    if (!body.GitHub) {
      //check if all fields are filled, Email, Firstname, Surname, Cryptedpassword
      if (!(body.Email && body.Firstname && body.Surname && body.Cryptedpassword)) {
        return res.status(400).send({ error: "You're missing a field" });
      }
    }
    const user = new Users(body);
    //check if written email exists in database, if so return error message
    const emailExists = await Users.findOne({ Email: body.Email}).exec();
    if (emailExists) {
      return res.status(400).send({ error: "Email already exists, try with another one" });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);

    user.Cryptedpassword = await bcrypt.hash(user.Cryptedpassword, salt);
    user.save().then((doc) => res.status(201).send(doc));
}

module.exports = {
  postSignUp
};
