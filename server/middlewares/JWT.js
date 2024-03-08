// import JWT to create token 
const { sign, verify } = require("jsonwebtoken")

const createTokens = (user) => {
    const accessToken = sign(
        { username: user.username, email: user.email }, // needs to pass what we going to store in the token
        "thisIsMySecret",
    );

    return accessToken;
}

// this function will check user have JWT token
const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]

    if (!accessToken) {
        return res.status(400).json({ error: "user is not authenticated!" })
    }

    try {
        const decodedToken = verify(accessToken, "thisIsMySecret")
        if (decodedToken) {
            req.username = decodedToken.username;
            req.email = decodedToken.email;
            req.authenticated = true; // we can access this 'authenticated' variable anywhere in anywhere we applied this middlewere
            return next() // call next() to move forward when we have nothing left to do
        }
    } catch (e) {
        return res.status(400).json({ error: "server token error" })
    }
}

module.exports = { createTokens, validateToken }