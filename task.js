var _ = require('lodash');

var Task = function(difficultyLevel, priority, itemReward, moneyReward) {
  this.difficultyLevel = difficultyLevel;
  this.priority = priority;
  this.itemReward = itemReward;
  this.moneyReward = moneyReward;
  this.status = "active";
};

Task.prototype.completeTask = function() {
  return this.status = "complete";
};

module.exports = Task;