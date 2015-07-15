var expect = require('chai').expect;
var HelloWorld = require('../app/hello-world');

describe('HelloWorld', function() {
  it('#hello() should return "hello world"', function() {
    var helloWorld = new HelloWorld();
    expect(helloWorld.hello()).to.equal('hello world');
  });
});
