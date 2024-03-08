const express = require("express")
const router = express.Router();

const User = require("../models/User.model") //import User Model
const bcrypt = require("bcrypt") // import bcrypt to hash the passwords

// import cookie-parser to store JWT token in a cookie
const cookieParser = require("cookie-parser")
router.use(cookieParser()); // this middleware is applied to every request

// import JWT middleware
const { createTokens, validateToken } = require("../middlewares/JWT")


// create user authentication

// handle user registration
router.post("/register", (req, res) => {
    const { username, password, email, ...rest } = req.body;
    //pass the password you want to hash into hash function
    bcrypt.hash(password, 10).then((hash) => {

        // store user details in the database
        User.create({
            username: username,
            password: hash,
            email: email
        }).then(() => {
            res.send("user registerd")
        }).catch((err) => {
            if (err) {
                res.status(400).json({ error: err })
            }
        })
    })
})


// handle user login
router.post("/login", async (req, res) => {
    const { username, password, email } = req.body;

    //check if the user already exists
    const user = await User.findOne({ where: { username: username } });

    if (!user) {
        return res.status(400).json({ error: "username is wrong!" })
    }

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match)// if password do not match this will be false
        {
            res.status(400).json({ error: " password is wrong!" })
        } else {
            const accessToken = createTokens(user) // create the JWT token for the user
            res.cookie("access-token", accessToken, { maxAge: 60 * 30 * 1000 }) // this will create cookie in clients browswer(maxAge is expriation time for the cookie)
            res.json({ message: "Login successful" });
        }
    })
});

// validate user
router.get("/authenticate", validateToken, (req, res) => {
    res.json({
        username: req.username,
        email: req.email
    })
})

// handle logut
router.get("/logout", validateToken, (req, res) => {
    const accessToken = req.cookies["access-token"];
    res.clearCookie("access-token").json({ message: "Logged out successfully" });
})



// return all the users
router.get("/", async (req, res) => {
    //get the users from database
    const users = await User.findAll();
    res.send(users)

});


module.exports = router;