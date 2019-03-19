const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.listen(8000, () => console.log("listening on port 8000"));
require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});