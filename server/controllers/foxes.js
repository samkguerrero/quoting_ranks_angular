const mongoose = require('mongoose')
const moment = require('moment')

require('../models/fox.js')

var Fox = mongoose.model('Fox')

module.exports = {
    create: function(req, res) {
        var fox = new Fox({name: req.body.name, magic: req.body.magic, created_at: new Date()});
        fox.save(function(err) {
            if(err) {
                console.log(err)
                console.log("something went wrong")
                return res.redirect("/foxes/new");
            } else {
                console.log("successfully added a user!")
            }
            res.redirect("/");
        })
    },
    index: function(req, res) {
        Fox.find({}).sort({name: -1}).exec(function(err, foxes) {
            res.render("index", {foxes: foxes, moment:moment});
        })
    },
    getFox: function(req, res, id) {
        Fox.find({_id: id}, function(err, fox) {
            res.render("details", {fox: fox[0] })
        })
    },
    updateFox: function(req, res, id) {
        Fox.update({_id: req.params.id}, {
            name: req.body.name,
            magic: req.body.magic
        }, function(err, affected, resp) {
            console.log(resp)
        })
        res.redirect("/foxes/" + String(id))
    },
    updateFoxDisplay: function(req, res, id) {
        Fox.find({_id: id}, function(err, fox) {
            res.render("edit", {fox: fox[0] })
        })
    },
    deleteFox: function(req, res, id) {
        Fox.findByIdAndRemove(id, (err, fox) => {
            if (err) return res.status(500).send(err);
            console.log("Deleted!")
            return res.redirect("/")
        })
    }
}
