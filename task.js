var _ = require('lodash');

var Task = function(difficultyLevel, priority, reward) {
  this.difficultyLevel = difficultyLevel;
  this.priority = priority;
  this.reward = reward;
  this.complete = false;
};

Task.prototype.completeTask = function() {
  return this.complete = true;
};

module.exports = Task;