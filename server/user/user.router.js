'use strict'

const router = require('express').Router()
let controller = require('./user.controller')
let authUtils = require('../auth/auth.utils.js')

router.route('/me')
  .get(authUtils.isLoggedIn, controller.me)

module.exports = router
