var _ = require('lodash');

var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
};

module.exports = Food;

