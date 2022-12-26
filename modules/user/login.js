const { Users } = require("../../models/Users");
const bcrypt = require("bcrypt");


const { createTokens } = require("./JWT");

// Login Function
async function postLogin (req, res) {
    const body = req.body;
    const user = await Users.findOne({ email: body.email });
    if (user) {
      const validPassword = await bcrypt.compare(body.cryptedpassword, user.cryptedpassword);
      if (validPassword) {
        const accessToken = createTokens(user)
        res.status(200).json({ message: "Your Password Is Valid, Welcome Stranger", id: user._id, accessToken: accessToken, email: user.email});
      } else {
        res.status(400).json({ error: "You Have Entered An Invalid Email or Password" });
      }
    }
}

module.exports = {
  postLogin
  };
