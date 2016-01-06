var Plane = function() {
  this.isFlying = true;
  this.weather = new Weather();
};

Plane.prototype.land = function(airport) {
  if (this.weather.isStormy() === true) throw new Error('Cannot land when weather is stormy');
  airport.dock(this);
  this.isFlying = false;
  return "The plane has landed at the airport";
};

Plane.prototype.takeOff = function(airport) {
  if (this.weather.isStormy() === true) throw new Error('Cannot take off when weather is stormy');
  airport.release(this);
  this.isFlying = true;
  return 'The plane has departed the airport';
};
