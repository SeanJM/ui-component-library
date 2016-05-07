Component.prototype.appendTo = function (target) {
  this._dict_.node.document.appendTo(target);
  return this;
};
