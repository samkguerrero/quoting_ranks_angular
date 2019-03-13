const mongoose = require('mongoose')
const moment = require('moment')

require('../models/people.js')

var People = mongoose.model('People')

module.exports = {
    index: function(req, res) {
        People.find({}).sort({name: -1}).exec(function(err, peoples) {
            res.send(peoples);
        })
    },
    create: function(req, res, name) {
        var people = new People({name: name, created_at: new Date(), updated_at: new Date()});
        people.save(function(err) {
            if(err) {
                console.log(err)
                console.log("something went wrong")
                return res.redirect("/");
            } else {
                console.log("successfully added a user!")
            }
            res.redirect("/");
        })
    },
    getPeople: function(req, res, name) {
        People.find({name: name}, function(err, people) {
            res.send(people[0])
        })
    },
    deletePeople: function(req, res, name) {
        People.find({name: name}).remove().exec(function(err, data) {
            if (err) return res.status(500).send(err);
            console.log("Deleted!")
            return res.redirect("/")
        })
    }
}
