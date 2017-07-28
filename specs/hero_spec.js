var assert = require('assert');
var Hero = require('../hero');

describe("Hero", function() {

  var hero

  beforeEach(function() {
    hero = new Hero("Kerlin Tapatalk", "Shepherds Pie")
  });

  it("should have name", function() {
    assert.strictEqual(hero.name, "Kerlin Tapatalk");
  });

  it("should start with full health", function() {
    assert.strictEqual(hero.health, 100);
  })

});