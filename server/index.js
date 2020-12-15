//* Loading Modules
const express = require('express')
const cors = require('cors')
const pool = require('./database/database.connect')
const app = express()

//* Middlewares
app.use(cors())
app.use(express.json())

//* App Configuration Settings
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Server started at http://127.0.0.1:${port}/`)
})