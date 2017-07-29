var _ = require('lodash');

var Hero = function(name, favouriteFood ) {
  this.name = name;
  this.health = 100;
  this.money = 0;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];
  this.completedTasks = [];
};

Hero.prototype.speak = function(phrase) {
  return phrase;
};

Hero.prototype.addTask = function(task) {
  this.tasksToComplete.push(task);
};

Hero.prototype.completeTask = function(task) {
  return _.remove(this.tasksToComplete, function(task) {
    return (task.status === "active");
  }.bind(this))
};

Hero.prototype.eat = function(food) {
  var actualReplenishmentValue = food.replenishmentValue * (food.name === this.favouriteFood ? 1.5 : 1);
  var newHealth = this.health += actualReplenishmentValue;
  return (newHealth > 100 ? this.health = 100 : this.health = newHealth);
};

module.exports = Hero;