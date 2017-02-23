'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique: true},
  password: String,
  about: String,
  hikes: Array,
  reviews: Array,
  photos: Array
})

// Validate Password
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
