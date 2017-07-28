var assert = require('assert');
var Food = require('../Food');

describe("Food", function() {

  var food1;

  beforeEach(function() {
    food1 = new Food("Shepherds Pie", 20);
  });

  it("should have a name", function() {
    assert.strictEqual(food1.name, "Shepherds Pie");
  });

  it("should have a replenishment value", function() {
    assert.strictEqual(food1.replenishmentValue, 20);
  });
});