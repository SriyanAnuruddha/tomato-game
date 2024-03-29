const express = require("express")
const axios = require("axios")
const router = express.Router();

// import cookie-parser to store JWT token in a cookie
const cookieParser = require("cookie-parser")
router.use(cookieParser()); // this middleware is applied to every request

// import JWT middleware
const { validateToken } = require("../middlewares/JWT")


router.get('/newgame', validateToken, async (req, res) => {
    try {
        const response = await axios.get('http://marcconrad.com/uob/tomato/api.php');
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Error fetching data" });
    }
})


router.get('/quote', validateToken, async (req, res) => {
    try {
        const quoteResponse = await axios.get("https://zenquotes.io/api/random")
        const quoteObj = await quoteResponse.data
        console.log(quoteObj)
        res.json({
            quote: quoteObj[0].q,
            person: quoteObj[0].a
        })
    } catch (e) {
        console.log(e)
        res.statusCode(404).send("server eror can't send quotes")
    }

})

module.exports = router;