Component.prototype.style = function (prop, value) {
  return this._dict_.node.document.style(prop, value);
};
