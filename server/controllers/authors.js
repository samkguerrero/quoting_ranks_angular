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
  },

  addAuthorQuote: (req, res) => {
    const ID = req.params.id
    const DATA = req.body;
    Author.findOneAndUpdate({_id: ID}, {$push: {quotes: DATA}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));    
  },

  updateAuthorQuote: (req, res) => {
    // console.log("inside of the controler")
    // console.log(req.body)
    // console.log(req.params.id)
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOne({_id: ID})
      .then(data => {
        // console.log("we found an author")
        // console.log("here is data")
        // console.log(data)
        // console.log("here are the quotes")
        // console.log(data.quotes)
        for (let b of data.quotes) {
            // console.log("here is a quote")
            // console.log(b)
            // console.log(b.content)
            // console.log(DATA.content)
            if (b.content === DATA.content) {
              // console.log("found the one to kill")
              // console.log(b.content)
              // console.log(DATA.content)
              // // indexOfDelete = data.quotes.indexOf(b)
              // // console.log("indexofdelete")
              // // console.log(indexOfDelete);
              // console.log("do shit:")
              b.vote += DATA.vote
            }
        }
        // console.log("this is the new data")
        // console.log(data.quotes)
        // console.log("we have looped through and updated the votes")
        // console.log("here are the votes post loop")
        // console.log(data.quotes)
        // console.log("above should be a list of quotes?")
        // console.log("next im going to overwrite previous rating array with mine")
        Author.findOneAndUpdate({_id: ID}, {quotes: data.quotes}, {runValidators:true, new:true})
          .then(data => res.json(data))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  },

  deleteAuthorQuote: (req, res) => {
    // console.log("inside of the controler")
    // console.log(req.body)
    // console.log(req.params.id)
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOne({_id: ID})
      .then(data => {
        // console.log("we found an author")
        // console.log("here is data")
        // console.log(data)
        // console.log("here are the quotes")
        // console.log(data.quotes)
        for (let b of data.quotes) {
            // console.log("here is a quote")
            // console.log(b)
            // console.log(b.content)
            // console.log(DATA.quoteToDelete)
            if (b.content === DATA.quoteToDelete) {
              // console.log("found the one to kill")
              // console.log(b.content)
              // console.log(DATA.quoteToDelete)
              // indexOfDelete = data.quotes.indexOf(b)
              // console.log("indexofdelete")
              // console.log(indexOfDelete);
              data.quotes.remove(b)
            }
        }
        // console.log("this is the new data")
        // console.log(data.quotes)
        // console.log("we have looped through and updated the votes")
        // console.log("here are the votes post loop")
        // console.log(data.quotes)
        // console.log("above should be a list of quotes?")
        // console.log("next im going to overwrite previous rating array with mine")
        Author.findOneAndUpdate({_id: ID}, {quotes: data.quotes}, {runValidators:true, new:true})
          .then(data => res.json(data))
          .catch(err => res.json(err));
      }
      )
      .catch(err => res.json(err));
    }

  }
