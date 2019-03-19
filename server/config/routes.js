const controllers = require("../controllers/authors.js");

module.exports = app => {
  app
    .get('/api/authors', controllers.getAllAuthors)
    .get('/api/authors/:id', controllers.getAuthor)
    .post('/api/authors', controllers.createAuthor)
    .delete('/api/authors/:id', controllers.deleteAuthor)
    .put('/api/authors/:id', controllers.updateAuthor)
    .put('/api/authors/quotes/:id', controllers.addAuthorQuote)
    .put('/api/authors/write/:id', controllers.updateAuthorQuote)
    .post('/api/authors/write/:id', controllers.deleteAuthorQuote)
}