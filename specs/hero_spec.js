var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');

describe("Hero", function() {

  var hero;
  var food1;

  beforeEach(function() {
    hero = new Hero("Kerlin Tapatalk", "Shepherds Pie");
    food1 = new Food("Shepherds Pie", 20);
  });

  it("should have name", function() {
    assert.strictEqual(hero.name, "Kerlin Tapatalk");
  });

  it("should start with full health", function() {
    assert.strictEqual(hero.health, 100);
  });

  it("should start out broke", function() {
    assert.strictEqual(hero.money, 0);
  })

  it("should have favourite Food",  function() {
    assert.strictEqual(hero.favouriteFood, "Shepherds Pie");
  });

  it("should have an empty array of tasks", function() {
    assert.strictEqual(hero.tasksToComplete.length, 0);
  });

  it("should replenish by eating food", function() {
    hero.eat(food1)
    assert.strictEqual(hero.health, 100);
  });

});