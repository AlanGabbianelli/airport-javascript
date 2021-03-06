describe('User Stories', function() {
  var plane, airport, weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
  it('An airport traffic controller should be able to instruct a plane to land and receive confirmation', function() {
    expect(plane.land(airport)).toEqual('Plane has successfully landed');
    expect(airport.planes).toContain(plane);
    expect(plane.isFlying).toBe(false);
  });


  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  it('An airport traffic controller should be able to instruct a plane to take off receive confirmation', function() {
    plane.land(airport);
    expect(plane.takeOff(airport)).toEqual('Plane has successfully taken off');
    expect(airport.planes).not.toContain(plane);
    expect(plane.isFlying).toBe(true);
  });

  it('An airport traffic controller should be able to prevent takeoff when weather is stormy', function() {
    Weather.prototype.isStormy = function() { return true; };
    expect(function() {plane.takeOff(airport);}).toThrowError("Cannot takeoff when stormy");
  });

});
