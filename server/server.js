const express = require('express')
const cors = require('cors')
const port = 5050
const app = express()
const usersRoute = require('./routes/users.route')
const gameRoute = require('./routes/game.route')

app.use(cors())

app.use(express.json())

const sequelize = require('./configs/DBconfig') //import database connection
sequelize.sync().then(() => console.log("Database is successfuly connected!")) //connect to database

// handle different routes
app.use('/api/users', usersRoute)

app.use('/api/game', gameRoute)

app.listen(port, () => console.log(`server is running on port:${port}`))

