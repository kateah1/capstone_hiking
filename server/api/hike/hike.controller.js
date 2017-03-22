let Hike = require('./hike.model')
let Review = require('./review.model')
let unirest = require('unirest')
let config = require('../../config')
let controller = {}

function filteredHikes (results) {
  let filtered = results.body.places.filter(function (place) {
    for (let prop in place) {
      if (place[prop] == null || prop === 'activities') {
        delete place[prop]
      }
    }
    return place
  })
  return filtered
}

controller.reviewsByUser = function (request, response, next) {
  Review.find({
    _hiker: request.body.id
  }).then(function (reviews) {
    response.status(200).json(reviews)
  }).catch(function (error) {
    next(error)
  })
}

controller.savedHikes = function (request, response, next) {
  Hike.find({
    _hiker: request.user.id
  }).then(function (success) {
    response.status(200).json(success)
  }).catch(function (error) {
    next(error)
  })
}

controller.saveHike = function (request, response, next) {
  Hike.update({
    _hiker: request.user.id
  }, {
    $addToSet: {
      hikes: parseInt(request.params.id)
    }
  }, {
    upsert: true
  }).then(function (success) {
    response.status(201).json(success)
  }).catch(function (error) {
    next(error)
  })
}

controller.findHikeById = function (request, response, next) {
  let {
    id
  } = request.params

  let url = `${config.trailapi.baseUrl}/?q[unique_id_eq]=${id}`

  unirest.get(url)
    .header('X-Mashape-Key', config.trailapi.key)
    .header('Accept', 'text/plain')
    .end(function (result) {
      Review.find({
        hike: id
      }).then(function (reviews) {
        let results = {
          hike: filteredHikes(result),
          reviews: reviews
        }
        response.status(200).json(results)
      }).catch(function (error) {
        next(error)
      })
    })
}

controller.findHikesByStateAndCity = function (request, response, next) {
  let {
    city,
    state
  } = request.params

  let url = `${config.trailapi.baseUrl}/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=${city}&q[state_cont]=${state}`

  unirest.get(url)
    .header('X-Mashape-Key', config.trailapi.key)
    .header('Accept', 'text/plain')
    .end(function (result) {
      response.status(200).json(filteredHikes(result))
    })
}

controller.addReviewToHike = function (request, response, next) {
  Review.create({
    _hiker: request.user.id,
    hike: request.body.hike_id,
    dateHiked: request.body.dateHiked,
    hikingTimeHours: request.body.hikingTimeHours,
    hikingTimeMinutes: request.body.hikingTimeMinutes,
    trailhead: request.body.trailhead,
    trailConditions: request.body.trailConditions,
    weather: request.body.weather,
    gearUsed: request.body.gearUsed
  }).then(function (review) {
    response.status(201).json(review)
  }).catch(function (error) {
    next(error)
  })
}

module.exports = controller
