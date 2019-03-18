const mongoose = require('mongoose');
require('../config/mongoose.js');

const Rating = require('../models/rating.js');

const CakeSchema = new mongoose.Schema({
  baker: {
    type: String, 
    required: true, 
    minlength: 3
  },
  image: {
    type: String, 
    required: true,
    minlength: 3
  },
  ratings: [Rating.schema]
}, {timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema);