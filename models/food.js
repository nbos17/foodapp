var mongoose = require("mongoose");
const Schema = mongoose.Schema;


const restaurantSchema = new Schema({
  name: { type: String, required: true },
  quality: { type: Number, required: true },
  time: String,
});

const Food = mongoose.model("Food", restaurantSchema);

module.exports = Food;