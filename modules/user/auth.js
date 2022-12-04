const lodash = require("lodash");
const axios = require("axios");

const clientId = process.env.GITHUBCLIENTID;
const secret = process.env.GITHUBCLIENTSECRET;
const jwtsecret = process.env.JWTSECRET;

async function getGitHubUser(code, res) {
    const gitHubToken = await axios
    .post(
        `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${secret}&code=${code}`
    )
    .then((res) => res.data)
    .catch((error) => {
        throw error;
    });

    const urlParams = new URLSearchParams(gitHubToken);
    const accessToken = urlParams.get("access_token")

    console.log("My token:", accessToken)

    // return axios
    // .get("https://api.github.com/user", {
    //     headers: { Authorization: `Bearer ${accessToken}`}
    // })
    // .then((res) => res.data)
    // .catch((error) => {
    //     console.log("Error from GitHub")
    //     throw error;
    // });

    return accessToken;

}

async function getOauthLogin(req,res) {
    console.log("reached")
    const code = lodash.get(req, "query.code");
    const path = lodash.get(req, "query.oath", '/');

    if (!code) {
        throw new Error("No code")
    }

    const gitHubUser = await getGitHubUser(code);

    res.redirect(`http://localhost:8080`)
}

module.exports = { getOauthLogin }


