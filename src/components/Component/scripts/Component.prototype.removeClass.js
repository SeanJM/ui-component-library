Component.prototype.removeClass = function (className) {
  this._dict_.node.document.removeClass(className);
  return this;
};
