var mongoose = require('mongoose')

var reviewSchema = mongoose.Schema({
  _hike_id: Number,
  _user: String,
  dateHiked: Date,
  hikingTime: String,
  trailhead: String,
  trailConditions: String,
  weather: String,
  gearUsed: String
})

var Review = mongoose.model('Review', reviewSchema)

var create = function (_hike_id, _user, dateHiked, hikingTime, trailhead, trailConditions, weather, gearUsed) {
  var review = {
    _hike_id: _hike_id,
    _user: _user,
    dateHiked: dateHiked,
    hikingTime: hikingTime,
    trailhead: trailhead,
    trailConditions: trailConditions,
    weather: weather,
    gearUsed: gearUsed
  }
  Review.create(review, function (err, review) {
    if (err || !review) {
      console.error('Could not create review', _hike_id)
      mongoose.disconnect()
      return
    }
    console.log('Created review', review._hike_id)
    mongoose.disconnect()
  })
}

var read = function (_hike_id) {
  Review.findOne({_hike_id: _hike_id}, function (err, review) {
    if (err || !review) {
      console.error('Could not read review', _hike_id)
      mongoose.disconnect()
      return
    }
    console.log('Read review', review._hike_id)
    mongoose.disconnect()
  })
}

var del = function (_hike_id, _user, dateHiked, hikingTime, trailhead, trailConditions, weather, gearUsed) {
  Review.findOneAndRemove({_hike_id: _hike_id}, function (err, review) {
    if (err || !review) {
      console.error('Could not delete review', _hike_id)
      mongoose.disconnect()
      return
    }
    console.log('Deleted review', review._hike_id)
    mongoose.disconnect()
  })
}
