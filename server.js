var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");

var PORT = process.env.PORT || 3000;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodapp";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use('/', express.static(public));



app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});






