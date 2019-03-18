const mongoose = require('mongoose');
require('../config/mongoose.js');

const RatingSchema = new mongoose.Schema({
    rating: {
        type: Number, 
        required: true, 
        minimum: 1,
        maximum: 5
    },
    comment: {
        type: String, 
        required: true, 
        minlength: 3
    }
}, {timestamps: true});

module.exports = {
    model: mongoose.model('Rating', RatingSchema),
    schema: RatingSchema
};