var _ = require('lodash');

var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.statusPoisoned = false;
};

module.exports = Food;

