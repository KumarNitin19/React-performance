Array.prototype.at = function (index) {
  if (index < 0) {
    return this[this.length - index * -1];
  }
  return this[index];
};
