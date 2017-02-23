'use strict'

exports.isLoggedIn = (request, response, next) => {
  if (!request.user) {
    return response.status(400).json({
      message: 'You do not have access'
    })
  }

  next()
}
