const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWTSECRET;

const createTokens = (user) => {
    const accessToken = sign({ userId: user._id }, secret);

    return accessToken;
};

const validateToken = (req, res, next) => {
    const token = req.cookies["access-token"]

    if (!token) {
        return res.status(400).json({ error: "User not authanticated" });
    }
    try {
        const validToken = verify(token, secret)

        if (validToken) {
            req.authenticated = true;
            return next();
        }

        throw "Invalid Token"
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}

module.exports = { createTokens, validateToken };