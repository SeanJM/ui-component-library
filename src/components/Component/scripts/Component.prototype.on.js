Component.prototype.on = function (name, callback) {
  var names = _.filter(name.split(','), function (a) {
    return a.length;
  });
  var i = 0;
  var n = names.length;
  var x;

  if (typeof this._subscriber_ === 'undefined') {
    this._subscriber_ = {};
  }

  for (; i < n; i++) {
    x = names[i].trim();

    if (typeof this._subscriber_[x] === 'undefined') {
      this._subscriber_[x] = [];
    }

    if (this._subscriber_[x].indexOf(callback) === -1) {
      this._subscriber_[x].push(callback);
    }
  }

  return this;
};
