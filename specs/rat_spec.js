var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');

describe("Rat", function() {

  var rat1;
  var food1;

  beforeEach(function() {
    rat1 = new Rat();
    food1 = new Food("Shepherds Pie", 20);
  });

  it("should be poisonous", function() {
    assert.strictEqual(rat1.poison, true);
  });

  it("should poison food", function() {
    rat1.eatFood(food1);
    assert.strictEqual(food1.statusPoisoned, true);
  })
})