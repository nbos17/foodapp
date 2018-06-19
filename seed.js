var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var mongoose = require("mongoose");
var db = require("./models");

const restaurants = [
  {
  	name : "Hunan Palace",
  	quality : 3.5,
    type: "Chinese",
  	time : "fast"
  },
  {
  	name : "KFC",
  	quality : 3.4,
    type : "American"
  	time : "fast"
  },
  {
  	name : "Buffalo Wild Wings",
    type: "American"
  	quality : 3.7,
  	time: "medium"
  },
  {
    name : "Dominoes",
    type: "pizza"
    quality: 3.4,
    time: "delivery"
  },
  {
    name : "Papa Johns",
    type : "pizza",
    quality : 3.5,
    time : "delivery"
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