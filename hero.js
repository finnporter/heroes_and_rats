var _ = require('lodash');

var Hero = function(name, favouriteFood ) {
  this.name = name;
  this.health = 100;
  this.money = 0;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];
  this.bag = [];
  this.getItemReward = function(task) {
    this.bag.push(task.itemReward);
  }
  this.getMoneyReward = function(task) {
    this.money += task.moneyReward;
  }
};

Hero.prototype.speak = function(phrase) {
  return phrase;
};

Hero.prototype.addTask = function(task) {
  this.tasksToComplete.push(task);
};

Hero.prototype.completeTask = function(task) {
  task.completesTask();
  this.getMoneyReward(task);
  this.getItemReward(task);
  var completedTasks = _.remove(this.tasksToComplete,function(task) {
    return (task.status === "active");
  })
};



Hero.prototype.eat = function(food) {
  var actualReplenishmentValue;
  var newHealth;
  var actualReplenishmentValue =
  (food.name === this.favouriteFood) ? food.replenishmentValue * 1.5 :
  (food.statusPoisoned === false) ? food.replenishmentValue * 1 : -(this.health * 0.8);
  newHealth = this.health += actualReplenishmentValue;
  return (newHealth > 100 ? this.health = 100 : this.health = newHealth);
};

module.exports = Hero;