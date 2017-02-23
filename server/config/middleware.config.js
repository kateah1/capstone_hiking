'use strict'

const bodyParser = require('body-parser')
const session = require('express-session')
const express = require('express')
const path = require('path')
const passport = require('passport')
const strategy = require('../auth/auth.local_strategy.js')
const User = require('../user/user.model.js')

module.exports = function (app) {
  app.use(express.static(path.resolve(__dirname, '../../public')))
  app.use('/libs', express.static(path.resolve(__dirname, '../../node_modules')))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  // Passport
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

  passport.use(strategy)
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })

  // Error Handling
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
}
