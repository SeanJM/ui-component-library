Component.prototype.checkPrototypeName = function (name) {
  for (var k in this.prototype) {
    if (name === k) {
      throw 'Invalid prototype name: \'' + name + '\', it\'s already taken.';
    }
  }
};
