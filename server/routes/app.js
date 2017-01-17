var hikeRouter = require('express').Router()
var _ = require('lodash')

var users = []
var myHikes = []
var reviews = []

hikeRouter.param('user', function (request, response, next, user) {
  var username = _.find(users, {user: user})

  if (username) {
    request.username = username
    next()
  } else {
    response.send()
  }
})

hikeRouter.route('/login')
  .post(function (request, response) {
    var user = {
      username: request.body.username,
      password: request.body.password
    }

    response.status(201).json(user)
  })

hikeRouter.route('/register')
  .post(function (request, response) {
    var user = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      username: request.body.username,
      email: request.body.email,
      password: request.body.password
    }

    users.push(user)

    response.status(201).json(users)
  })

hikeRouter.route('/search')
  .get(function (request, response) {
    response.status(200).json(request)
  })

/** GET RID OF HIKE DETAIL??? **/
hikeRouter.route('/:id/hikedetail')
  .get(function (request, response) {
    response.status(200).json(request.hike)
  })

hikeRouter.route('/me/myhikes')
  .get(function (request, response) {
    response.status(200).json(myHikes)
  })
  /** GET MY HIKES TO BE PERMANENTLY ADDED TO SPECIFIC USER LIST OF HIKES **/
  .post(function (request, response) {
    var hike = {
      id: request.body.id,
      image: request.body.image,
      name: request.body.name,
      location: request.body.location
    }

    myHikes.push(hike)

    response.status(201).json(myHikes)
  })
  .delete(function (request, response) {
    var hike = _.findIndex(myHikes, {id: request.params.id})
    myHikes.splice(hike, 1)

    response.status(200).json(myHikes)
  })

hikeRouter.route('/:user/hikes')
  .get(function (request, response) {
    response.status(200).json(myHikes)
  })

hikeRouter.route('/:id/reviews')
  .get(function (request, response) {
    response.status(200).json(request)
  })

hikeRouter.route('/:id/review_form')
  .post(function (request, response) {
    var review = {
      dateHiked: request.body.dateHiked,
      hikingTime: request.body.hikingTime,
      trailhead: request.body.trailhead,
      trailConditions: request.body.trailConditions,
      weather: request.body.weather,
      gearUsed: request.body.gearUsed
    }

    reviews.push(review)

    response.status(201).json(reviews)
  })

module.exports = hikeRouter
