var _ = require('lodash');

var Task = function(difficultyLevel, priority, reward) {
  this.difficultyLevel = difficultyLevel;
  this.priority = priority;
  this.reward = reward;
  this.status = "active";
};

Task.prototype.completeTask = function() {
  return this.status = "complete";
};

module.exports = Task;