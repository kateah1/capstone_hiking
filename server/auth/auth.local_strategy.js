const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../api/user/user.model')

module.exports = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({
    email: email
  }, (error, user) => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(error)
      }
      if (!user) {
        reject(new Error('Incorrect username'))
      }
      user.validPassword(password, (error, matches) => {
        if (error) {
          reject(error)
        }
        matches ? resolve(user) : reject(new Error('Incorrect username or password'))
      })
    }).then((user) => {
      done(null, user)
    }).catch((error) => {
      done(error)
    })
  })
})
