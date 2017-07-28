var _ = require('lodash');

var Task = function(difficultyLevel, priority, reward) {
  this.difficultyLevel = difficultyLevel;
  this.priority = priority;
  this.reward = reward;
  this.complete = false;
};

module.exports = Task;