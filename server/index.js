//* Loading Modules
const express = require('express')
const cors = require('cors')
const todo = require('./routes/apis/todo.api')

//* Creating App
const app = express()

//* Middlewares
app.use(cors())
app.use(express.json())

//* Routes 
app.use('/api/todos/', todo)

//* App Configuration Settings
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Server started at http://127.0.0.1:${port}/`)
})