var Plane = function() {
  this.isFlying = true;
};

Plane.prototype.land = function(airport) {
  airport.dock(this);
  this.isFlying = false;
  return "The plane has landed at the airport";
};

Plane.prototype.takeOff = function(airport) {
  airport.release(this);
  this.isFlying = true;
  return 'The plane has departed the airport';
};
