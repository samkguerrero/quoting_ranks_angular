const mongoose = require('mongoose')

var PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    created_at: Date,
    updated_at: Date
})
mongoose.model('People', PeopleSchema)