const controllers = require("../controllers/cakes.js");

module.exports = app => {
  app
    .get('/api/cakes', controllers.getAllCakes)
    .get('/api/cakes/:id', controllers.getCake)
    .post('/api/cakes', controllers.createCake)
    .post('/api/cakes/:id', controllers.addRating)
    .delete('/api/cakes/:id', controllers.deleteCake)
}