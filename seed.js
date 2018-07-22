var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodapp";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const restaurants = [
  {
  	name : "Leann Chin",
  	quality : 3.5,
    type: "Chinese",
  	time : "normal",
    price : 8
  },
  {
  	name : "KFC",
  	quality : 3.4,
    type : "American",
  	time : "fast",
    price : 5
  },
  {
  	name : "Buffalo Wild Wings",
    type: "Wings",
  	quality : 3.7,
  	time: "normal",
    price : 10
  },
  {
    name : "Dominoes",
    type: "pizza",
    quality: 3.4,
    time: "delivery",
    price: 6
  },
  {
    name : "Papa Johns",
    type : "pizza",
    quality : 3.5,
    time : "delivery",
    price: 7
  },
  {
    name : "Piada",
    type : "Italian",
    quality: 4.0,
    time: "normal",
    price: 10
  },
  {
    name : "Taco John's",
    type : "Mexican",
    quality : 3.5,
    time : "fast",
    price : 6 
  },
  {
    name : "Zantigo's",
    type : "Mexican",
    quality : 4.0,
    time : "normal",
    price : 6
  },
  {
    name : "Little Chopsticks",
    type : "Chinese",
    quality : 3.9,
    time : "delivery",
    price : 8
  },
  {
    name : "Taco Bell",
    type : "Mexican",
    quality : 3.5,
    time : "fast",
    price : 5
  },
  {
    name : "Qdoba",
    type: "Mexican",
    quality : 4,
    time : "normal",
    price : 8
  },
  {
    name : "Firehouse",
    type : "sandwich",
    quality : 4,
    time : "normal",
    price : 8
  },
  {
    name : "Burger King",
    tpye : "sandwich",
    quality : 3,
    time : "fast",
    price : 6
  },
  {
    name : "Jimmy Johns",
    type : "sandwich",
    quality : 4,
    time : "delivery",
    price : 7
  },
  {
    name : "D-Spot",
    type : "Wings",
    quality : 4.5,
    time : "normal",
    price : 12
  },
  {
    name : "Noodles and Company",
    type : "Italian",
    quality : 4,
    time : "normal",
    price : 8
  }

];



db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(restaurants))
  .then(data => {

    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });