const mongoose = require('mongoose')
const moment = require('moment')

require('../models/task.js')

var Task = mongoose.model('Task')

module.exports = {
    index: function(req, res) {
        Task.find()
            .then(tasks => res.send(tasks))
            .catch(err => res.send(err));
    },
    getTask: function(req, res, id) {
        Task.find({_id: id})
            .then(task => res.send(task[0]))
            .catch(err => res.send(err));
    },
    deleteTask: function(req, res, id) {
        Task.find({_id: id}).deleteOne()
            .then(data => res.send("Deleted"))
            .catch(err => res.status(500).send(err))
    },
    create: function(req, res, name) {
        var task = new Task({
            title: req.body.title, 
            description: req.body.description, 
            completed: req.body.completed}).save()
                .then(data => res.status(200).send("created task!"))
                .catch(err => res.status(500).send(err))
    },
    updateTask: function(req, res, id) {
        Task.update({_id: id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
            .then(data => res.send(data))
            .catch(err => res.status(500).send(err))
    }
}
