const Cake = require('../models/cake.js');
const Rating = require('../models/rating.js');

module.exports = {

  getAllCakes: (req, res) => {
    Cake.find()
      // .then(data => console.log(data) || res.json(data))
      // .catch(err => console.log(err) || res.json(err));
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({_id: ID})
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },
  
  deleteCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createCake: (req, res) => {
    console.log("in my controllers")
    const DATA = req.body;
    Cake.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addRating: (req, res) => {
    console.log("houston outlaws")
    console.log(req.body)
    console.log(req.params.id)
    var newRating = new Rating.model(req.body)
    console.log('new comment')
    console.log(newRating)
    Cake.findOneAndUpdate({_id:req.params.id}, {$push: {ratings: newRating}})
      .then(data => console.log(data))
      .then(err => console.log(err))
  }
}
