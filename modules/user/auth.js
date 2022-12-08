const lodash = require("lodash");
const axios = require("axios");
const fetch = require('node-fetch');

const clientId = process.env.GITHUBCLIENTID;
const secret = process.env.GITHUBCLIENTSECRET;

async function getOauthLogin(req,res) {
    const code = lodash.get(req, "query.code");

    if (!code) {
        throw new Error("No code")
    }

    const gitHubUserToken = await getGitHubAccesToken(code);
    const emails = await getGitHubUserEmails(gitHubUserToken);
    const primaryEmail = getPrimaryEmail(emails);
    const userData = await getGitHubUserName(gitHubUserToken);

    const user = {
        "Firstname": userData.login,
        "Email": primaryEmail,
        "GitHub": true,
        "Cryptedpassword": "github forever"
    }

    await signUpGitHubUser(user);
    res.cookie("GitHubUser", primaryEmail);

    res.redirect("http://localhost:8080")
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

async function getGitHubUserName(userToken) {
    const req =  fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/vnd.github+json",
            'X-GitHub-Api-Version': "2022-11-28"
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

async function signUpGitHubUser(body) {
    try {
        const req = fetch ("http://localhost:3000/v1/users/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await req;
        return data.json()
    } catch (error) {
        return error
    }
}

module.exports = { getOauthLogin }