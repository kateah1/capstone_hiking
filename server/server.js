// Dependencies
var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')

// MongoDB

mongoose.connect('mongodb://localhost/capstone_hiking')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected!')
})

// Express
var app = express()
var server = http.Server(app)

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/', function (request, response) {
  response.send('Hello world!')
})

app.use(function (error, request, response, next) {
  if (error) {
    console.log(error.message)
    response.status(500).send(error)
  }
})

app.use('*', function (request, response) {
  response.status(404).json({
    message: 'Not Found'
  })
})

// Start Server

server.listen(process.env.PORT || 8080)
console.log('On port 8080')

module.exports = server
