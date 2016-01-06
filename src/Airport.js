var Airport = function() {
  this.hangar = [];
  this.CAPACITY = 20;
};

Airport.prototype.dock = function(plane) {
  if(this.hangar.length >= this.CAPACITY)throw new Error('Cannot land, airport is full');
  this.hangar.push(plane);
};

Airport.prototype.release = function(plane) {
  var planeLocation = this.hangar.indexOf(plane);
  this.hangar.splice(planeLocation, 1);
};

Airport.prototype.overrideCAPACITY = function(newCAPACITY) {
  this.CAPACITY = newCAPACITY;
};
