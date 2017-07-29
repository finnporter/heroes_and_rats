var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');

describe("Hero", function() {

  var hero;
  var food1;
  var food2;
  var food3;
  var task1;
  var task2

  beforeEach(function() {
    hero = new Hero("Kerlin Tapatalk", "Shepherds Pie");
    food1 = new Food("Shepherds Pie", 20);
    food2 = new Food("Loaf of Bread", 3);
    food3 = new Food("Chicken Noodle Soup", 15);
    task1 = new Task(1, 2, "Shepherds Pie");
    task2 = new Task(2, 1, "Loaf of Bread");
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

  it("should say something", function() {
    assert.strictEqual(hero.speak("I am Kerlin Tapatalk"), "I am Kerlin Tapatalk")
  });

  it("should add tasks to collection", function() {
    hero.addTask(task1);
    assert.strictEqual(hero.tasksToComplete.length, 1);
  });

  it("should remove task after completion", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    task1.completeTask(task1);
    assert.strictEqual(hero.completedTasks.length, 1);
  });

  it("should replenish by eating food_regular food", function() {
    hero.health = 95;
    hero.eat(food2);
    assert.strictEqual(hero.health, 98);
  });

  it("should replenish by eating food_favourite food", function() {
    hero.health = 70;
    hero.eat(food1);
    assert.strictEqual(hero.health, 100);
  });

  it("should replenish but not more than 100", function() {
    hero.eat(food3);
    assert.strictEqual(hero.health, 100);
  });

});