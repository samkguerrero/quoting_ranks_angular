const mongoose = require('mongoose')

var FoxSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    magic: {type: String, required: true, minlength: 3},
    created_at: Date
})
mongoose.model('Fox', FoxSchema)