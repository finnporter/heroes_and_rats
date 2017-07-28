var _ = require('lodash');

var Hero = function(name, favouriteFood ) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];
};

module.exports = Hero;