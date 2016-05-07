Component.prototype.off = function (name, callback) {
  var names = _.filter(name.split(','), function (a) {
    return a.length;
  });
  var i = 0;
  var n = names.length;
  var indexOf;
  var x;

  for (; i < n; i++) {
    x = names[i].trim();

    if (typeof this._subscriber_[x] === 'undefined') {
      throw 'There are no subscribers for \'' + x + '\'';
    }

    indexOf = this._subscriber_[x].indexOf(callback);

    if (indexOf !== -1) {
      this._subscriber_[x].slice(indexOf, 1);
    }
  }

  return this;
};
