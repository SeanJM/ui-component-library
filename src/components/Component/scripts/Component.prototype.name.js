Component.prototype.name = function (name) {
  var oldName = this._name_;

  if (typeof name === 'string') {
    this.trigger('name', {
      oldName : oldName,
      name : name,
      target : this
    });

    this._name_ = name;
  } else {
    return oldName;
  }
};
