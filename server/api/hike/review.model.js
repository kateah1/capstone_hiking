const mongoose = require('mongoose')
const schema = mongoose.Schema

let reviewSchema = new schema({
  _hiker: schema.Types.ObjectId,
  hike: {
    type: Number
  },
  dateHiked: {
    type: Date,
    required: true
  },
  hikingTimeHours: {
    type: Number
  },
  hikingTimeMinutes: {
    type: Number
  },
  trailhead: {
    type: String
  },
  trailConditions: {
    type: String
  },
  weather: {
    type: String
  },
  gearUser: {
    type: String
  }
})

module.exports = mongoose.model('Review', reviewSchema)
