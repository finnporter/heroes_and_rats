var _ = require('lodash');

var Rat = function() {
  this.poison = true;
};

Rat.prototype.eatFood = function(food) {
  return food.statusPoisoned = true;
};

module.exports = Rat;