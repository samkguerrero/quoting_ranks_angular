
var express = require("express");
var mongoose = require('mongoose');
var moment = require('moment');

mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });

var QuoteSchema = new mongoose.Schema({
    owner: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    created_at: Date
})
mongoose.model('Quote', QuoteSchema)
var Quote = mongoose.model('Quote')

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

app.post('/new_quote', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({owner: req.body.owner, quote: req.body.quote, created_at: new Date()});
    quote.save(function(err) {
        if(err) {
            console.log(err)
            console.log("something went wrong")
            return res.redirect("/");
        } else {
            console.log("successfully added a user!")
        }
        res.redirect("/quotes");
    })
})

app.get('/quotes', function(req, res) {
    Quote.find({}).sort({created_at: -1}).exec(function(err, quotes) {
        res.render("quotes", {quotes: quotes, moment:moment});
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});