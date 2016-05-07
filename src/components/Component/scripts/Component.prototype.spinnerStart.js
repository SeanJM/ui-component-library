Component.prototype.spinnerStart = function () {
  this._spinner_ = Spinner.new();
  this._spinner_ = this._spinner_.start();
  this._spinner_.centerTo(this._dict_.node.document);
};
