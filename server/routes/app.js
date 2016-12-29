var hikeRouter = require('express').Router()
var _ = require('lodash')

var users = []
var myHikes = []
var reviews = []

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

    response.status(201)
  })

hikeRouter.route('/home')
  .get(function (request, response) {
    response.status(200).json(request.hike)
  })

hikeRouter.route('/search')
  .get(function (request, response) {
    response.status(200).json(request.hike)
  })

hikeRouter.route('/hikedetail/:id')
  .get(function (request, response) {
    response.status(200).json(request.hikeDetail)
  })

hikeRouter.route('/myhikes')
  .get(function (request, response) {
    response.status(200).json(myHikes)
  })
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

hikeRouter.route('/reviews')
  .get(function (request, response) {
    response.status(200).json(request.review)
  })

hikeRouter.route('review_form')
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
