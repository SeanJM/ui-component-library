Component.prototype.trigger = function (name, e) {
  var names = _.filter(name.split(','), function (a) {
    return a.length;
  });
  var i = 0;
  var n = names.length;
  var index;
  var x;
  var j;
  var k;

  if (typeof this._subscriber_ === 'undefined') {
    this._subscriber_ = {};
  }

  for (; i < n; i++) {
    x = names[i].trim();

    if (typeof this._subscriber_[x] === 'object') {
      for (j = 0, k = this._subscriber_[x].length; j < k; j++) {
        this._subscriber_[x][j](e);
      }
    }
  }

  return this;
};
