var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");
var bodyParser = require("body-parser");
var logger = require("morgan");




var PORT = process.env.PORT || 3000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodapp";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(public));

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

// view cost sort option
app.get('/cost', function(req, res) {
	res.sendFile(path.join(public, 'cost.html'));
});

// view method cost option
app.get('/method', function(req, res) {
	res.sendFile(path.join(public, 'method.html'));
});

//food main search
app.get("/food", function(req, res) {
	var query = {type : req.query.food};
	var number = parseInt(req.query.quality);
	var quality = {price : {$lte : number}};
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

//random button route
app.get("/random", function(req, res) {
	db.Food.find({})
		.then(function(food) {
			console.log(food);
			res.json(food);
		})
		.catch(function(err) {
			res.json(err);
		});
});

// cost db call
app.get("/foodCost", function(req, res) {
	console.log(req.query.quality);
	//var query = {type : req.query.food};
	var number = parseInt(req.query.quality);
	var quality = {price : number};
	//var time = {time : req.query.time};

  // Grab every document in the Articles collection
  db.Food.find({price : number} )
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

//method db call
app.get("/foodMethod", function(req, res) {
	console.log(req.query.time);
	var time = req.query.time;

	db.Food.find({time : time})
		.then(function(food) {
			console.log(food);
			res.json(food)
		})
		.catch(function(err) {
			res.json(err);
		})
});





