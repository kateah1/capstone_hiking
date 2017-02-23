'use strict'

// Dependencies
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')

// Express
let app = express()
let server = http.Server(app)

app.use(express.static('public'))

// Require Middleware
require('./config/middleware.config.js')(app)

app.use('/auth', require('./auth/auth.router.js'))
app.use('/api/user', require('./user/user.router.js'))
app.use('/api/hike', require('./hike/hike.router.js'))

app.get('*', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, '/public/index.html'))
})

// MongoDB
mongoose.connect('mongodb://localhost/capstone_hiking')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected!')
})

// Start Server
server.listen(process.env.PORT || 8080)
console.log('On port 8080')

module.exports = server
