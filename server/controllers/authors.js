const Author = require('../models/author.js');

module.exports = {

  getAllAuthors: (req, res) => {
    Author.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id: ID})
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },
  
  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const DATA = req.body;
    Author.findOneAndUpdate({_id:req.params.id}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}
