var Weather = function() {};

Weather.prototype.isStormy = function() {
  if (Math.random() >= 0.8) {
    return true;
  } else {
    return false;
  }
};
