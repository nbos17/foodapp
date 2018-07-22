var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");
var bodyParser = require("body-parser");
var logger = require("morgan");


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

var PORT = process.env.PORT || 3000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodapp";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(express.static(public));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.get("/food", function(req, res) {
	var query = {type : req.query.food};
	var number = parseInt(req.query.quality);
	var quality = {price : number};
	var time = {time : req.query.time};

	console.log(query, quality, time);
  // Grab every document in the Articles collection
  db.Food.find({ $and: [query, quality, time ] } )
    .then(function(food) {
    	console.log(food);
      // If we were able to successfully find Articles, send them back to the client
      res.json(food);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});






