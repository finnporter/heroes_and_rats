var assert = require('assert');
var Hero = require('../hero');

describe("Hero", function() {

  var hero = new Hero("Kerlin Tapatalk", "Shepherds Pie");

  it("should have name", function() {
    assert.strictEqual(hero.name, "Kerlin Tapatalk");
  });

});