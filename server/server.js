const express = require('express')
const port = 5050
const app = express()


app.get('/api/user', (req, res) => {
    return res.json("hello world")
})

app.listen(port, () => console.log(`server is running on port:${port}`))