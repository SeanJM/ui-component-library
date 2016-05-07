Component.prototype.addClass = function (className) {
  this._dict_.node.document.addClass(className);
  return this;
};
