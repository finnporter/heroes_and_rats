var _ = require('lodash');

var Hero = function(name, favouriteFood ) {
  this.name = name;
  this.health = 100;
  this.money = 0;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];
};

module.exports = Hero;