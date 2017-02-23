'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let hikeSchema = new Schema({
  _hiker: Schema.Types.ObjectId,
  hikes: [Number]
})

module.exports = mongoose.model('Hike', hikeSchema)
