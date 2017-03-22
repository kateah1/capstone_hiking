// dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// express
let app = express()

app.use(express.static('public'))

// mongodb
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost/capstone_hiking')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('MongoDB connected!')
})

// require middleware
require('./config/middleware.config')(app)

app.use('/auth', require('./auth/auth.router'))
app.use('/api/users', require('./api/user/user.router'))
app.use('/api/hikes', require('./api/hike/hike.router'))

app.get('*', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, '../client/public/index.html'))
})

// Error Handling
app.use(function (error, request, response, next) {
  if (error) {
    console.log(error.message)
    response.status(500).send(error)
  }
})

// start server
app.listen(5000, () => {
  console.log('Express server connected!')
})

// module.exports = app
