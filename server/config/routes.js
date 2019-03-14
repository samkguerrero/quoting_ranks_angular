const controllers = require("../controllers/tasks.js");

module.exports = app => {
  app
    .get('/api/tasks', controllers.getAllTasks)
    .get('/api/tasks/:id', controllers.getTask)
    .post('/api/tasks', controllers.create)
    .put('/api/tasks/:id', controllers.updateTask)
    .delete('/api/tasks/:id', controllers.deleteTask)
}