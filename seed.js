var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");

const restaurants = [
  {
  	name : "Hunan Palace",
  	quality : 3,
  	time : "fast"
  },
  {
  	name : "KFC",
  	quality : 3.4,
  	time : "fast"
  },
  {
  	name : "Buffalo Wild Wings",
  	quality : 3.7,
  	time: "medium"
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