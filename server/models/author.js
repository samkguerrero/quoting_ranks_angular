const mongoose = require('mongoose');
require('../config/mongoose.js');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    minlength: 3
  }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);