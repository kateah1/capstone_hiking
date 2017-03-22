const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UsSchema = mongoose.Schema

let userSchema = new UsSchema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String
})

userSchema.methods.validPassword = function (password, callback) {
  bcrypt.compare(password, this.password, (error, response) => {
    return new Promise((resolve, reject) => {
      error ? reject(error) : resolve(response)
    }).then((response) => {
      callback(null, response)
    }).catch((error) => {
      callback(error)
    })
  })
}

module.exports = mongoose.model('User', userSchema)
