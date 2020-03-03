const express = require('express')

const db = require('./queries/queries')

// App
const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', db.listUsers)
app.post('/create', db.createUser)
app.delete('/delete/:id', db.deleteUser)


module.exports = app;
