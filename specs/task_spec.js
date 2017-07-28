var assert = require('assert');
var Task = require('../task');

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(1, 2, "Shepherds Pie");
  });

  it("should have a difficulty level", function() {
    assert.strictEqual(task1.difficultyLevel, 1);
  });

  it("should have a priority", function() {
    assert.strictEqual(task1.priority, 2);
  });


});