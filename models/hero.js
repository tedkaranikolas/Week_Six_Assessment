var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var superHero = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Hero = mongoose.model('heroes', superHero);

module.exports = Hero;
