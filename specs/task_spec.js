var assert = require('assert');
var Task = require('../task');

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(1, 2, "Shepherds Pie", 10);
  });

  it("should have a difficulty level", function() {
    assert.strictEqual(task1.difficultyLevel, 1);
  });

  it("should have a priority", function() {
    assert.strictEqual(task1.priority, 2);
  });

  it("should have item reward", function() {
    assert.strictEqual(task1.itemReward, "Shepherds Pie");
  });

  it("should have money reward", function() {
    assert.strictEqual(task1.moneyReward, 10);
  })

  it("should be NOT complete by default", function() {
    assert.strictEqual(task1.status, "active");
  });

  it("can be set to complete", function() {
    assert.strictEqual(task1.completesTask(), "complete");
  });


});