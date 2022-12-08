const { Users } = require("../../models/Users");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const { createTokens } = require("./JWT");

// Login Function
async function postLogin (req, res) {
    const body = req.body;
    const user = await Users.findOne({ Email: body.Email });
    if (user) {
      const validPassword = await bcrypt.compare(body.Cryptedpassword, user.Cryptedpassword);
      if (validPassword) {
        const accessToken = createTokens(user)
        res.status(200).json({ message: "Your Password Is Valid, Welcome Stranger", id: user._id, accessToken: accessToken, Email: user.Email});
      } else {
        res.status(400).json({ error: "You Have Entered An Invalid Email or Password" });
      }
    }
}

module.exports = {
  postLogin
  };
