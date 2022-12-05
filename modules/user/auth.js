const lodash = require("lodash");
const axios = require("axios");
const fetch = require('node-fetch');

const clientId = process.env.GITHUBCLIENTID;
const secret = process.env.GITHUBCLIENTSECRET;

async function getOauthLogin(req,res) {
    console.log("reached")
    const code = lodash.get(req, "query.code");
    const path = lodash.get(req, "query.oath", '/');

    if (!code) {
        throw new Error("No code")
    }

    const gitHubUserToken = await getGitHubAccesToken(code);
    const emails = await getGitHubUserEmails(gitHubUserToken);
    const primaryEmail = getPrimaryEmail(emails);

    res.redirect(`http://localhost:8080`)
}

async function getGitHubAccesToken(code, res) {
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

    console.log("My token:", accessToken);
    return accessToken;
}

async function getGitHubUserEmails(userToken) {
    const req =  fetch("https://api.github.com/user/emails", {
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/vnd.github+json"
        }
    })

    const data = await req;
    return data.json();
}

function getPrimaryEmail(emails) {
    for (let i=0; i <= emails.length; i++) {
        if (emails[i].primary === true) {
            return emails[i].email
        }
    }
}

module.exports = { getOauthLogin }