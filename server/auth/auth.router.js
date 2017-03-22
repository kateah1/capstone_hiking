const passport = require('passport')
const router = require('express').Router()
let controller = require('./auth.controller')

router.route('/login')
  .post(passport.authenticate('local'), (request, response) => {
    if (request.user) {
      response.status(200).json(request.user)
    } else {
      response.status(500).json('Incorrect username or password')
    }
  })

router.route('/register')
  .post(controller.register)

module.exports = router
