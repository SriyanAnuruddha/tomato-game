const express = require('express')
const port = 5050
const app = express()
const usersRoute = require('./routes/users.route')

app.use(express.json())

const sequelize = require('./configs/DBconfig') //import database connection
sequelize.sync().then(() => console.log("Database is successfuly connected!")) //connect to database

// handle different routes
app.use('/api/users', usersRoute)

app.listen(port, () => console.log(`server is running on port:${port}`))

