var HelloWorld = function() {};

HelloWorld.prototype = {
  hello: function() {
    return 'hello world';
  }
};

module.exports = HelloWorld;
