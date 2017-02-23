'use strict'

const passport = require('passport')
const router = require('express').Router()
let controller = require('./auth.controller.js')

router.route('/login')
  .post(passport.authenticate('local'), (request, response) => {
    response.status(200).json(request.user)
  })

router.route('/register')
  .post(controller.register)

module.exports = router
