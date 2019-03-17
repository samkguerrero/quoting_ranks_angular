const Task = require('../models/task.js');

module.exports = {

  getAllTasks: (req, res) => {
    Task.find()
      // .then(data => console.log(data) || res.json(data))
      // .catch(err => console.log(err) || res.json(err));
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getTask: (req, res) => {
    const ID = req.params.id;
    Task.findOne({_id: ID})
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },
  
  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  create: (req, res) => {
    const {title, description, completed} = req.body;
    new Task({title:title, description:description, completed:completed})
      .save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: (req, res) => {
    const DATA = req.body;
    Task.findOneAndUpdate({_id: req.params.id}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}
