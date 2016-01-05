var Airport = function() {
  this.hangar = [];
};

Airport.prototype.dock = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.release = function(plane) {
  var planeLocation = this.hangar.indexOf(plane);
  this.hangar.splice(planeLocation, 1);
};
