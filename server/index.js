//* Loading Modules
const express, { json } = require('express')
const cors = require('cors')
const app = express()

//* Middlewares
app.use(cors())
app.use(json())

//* App Configuration Settings
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Server started at http://127.0.0.1:${port}/`)
})