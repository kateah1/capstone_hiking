const bcrypt = require('bcrypt')
let User = require('../api/user/user.model')
let controller = {}

controller.register = (request, response) => {
  bcrypt.genSalt(5, function (error, salt) {
    if (error) {
      console.log(error)
    }
    bcrypt.hash(request.body.password, salt, function (error, hash) {
      if (error) {
        console.log(error)
      }
      User.create({
        name: request.body.name,
        email: request.body.email,
        password: hash
      }, (error, user) => {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error)
          } else {
            resolve(user)
          }
        }).then((user) => {
          response.status(201).json(user)
        }).catch((error) => {
          response.status(400).json(error.message)
        })
      })
    })
  })
}

module.exports = controller
