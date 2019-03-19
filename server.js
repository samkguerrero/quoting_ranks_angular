const express = require("express");
const bodyParser = require('body-parser');
const path  = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(8000, () => console.log("listening on port 8000"));
require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});