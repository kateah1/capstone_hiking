var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  password: String,
  about: String,
  hikes: Array,
  reviews: Array,
  photos: Array
})

var User = mongoose.model('User', userSchema)

var create = function (username, firstName, lastName, email, password, about, hikes, reviews, photos) {
  var user = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    about: about,
    hikes: hikes,
    reviews: reviews,
    photos: photos
  }
  User.create(user, function (err, user) {
    if (err || !user) {
      console.error('Could not create user', username)
      mongoose.disconnect()
      return
    }
    console.log('Created user', user.username)
    mongoose.disconnect()
  })
}

var read = function (username) {
  User.findOne({username: username}, function (err, user) {
    if (err || !user) {
      console.error('Could not read user', username)
      mongoose.disconnect()
      return
    }
    console.log('Read user', user.username)
    mongoose.disconnect()
  })
}

var update = function (username, email, password, about, photos) {
  User.findOneAndUpdate({email: email}, {password: password}, {about: about}, {photos: photos}, function (err, user) {
    if (err || !user) {
      console.error('Could not update user', username)
      mongoose.disconnect()
      return
    }
    console.log('Updated user', user.username)
    mongoose.disconnect()
  })
}

var del = function (username, firstName, lastName, email, password, about, hikes, reviews, photos) {
  User.fineOneAndRemove({username: username}, function (err, user) {
    if (err || !user) {
      console.error('Could not delete user', username)
      mongoose.disconnect()
      return
    }
    console.log('Deleted user', user.username)
    mongoose.disconnect()
  })
}
