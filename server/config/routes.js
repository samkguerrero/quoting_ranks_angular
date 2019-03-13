var tasks = require("../controllers/tasks.js");

module.exports = function(app) {
    app.get('/', function(req, res) {
        tasks.index(req, res)
    })
    app.get('/:id', function(req, res) {
        tasks.getTask(req, res, req.params.id)
    })
    app.delete('/:id', function(req, res) {
        tasks.deleteTask(req, res, req.params.id)
    })
    app.post('/new', function(req, res) {
        tasks.create(req, res)
    })
    app.put('/:id', function(req, res) {
        tasks.updateTask(req, res, req.params.id)
    })
}