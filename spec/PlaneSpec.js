describe("Plane", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    spyOn(plane.weather, 'isStormy').and.returnValue(false);
    airport = {
      dock: function() {},
      release: function() {}
    };
  });

  it("A plane is initialized as flying", function() {
    expect(plane.isFlying).toEqual(true);
  });

  describe('#land', function() {
    it("confirms landing with a message", function() {
      landingMessage = 'The plane has landed at the airport';
      expect(plane.land(airport)).toEqual(landingMessage);
    });

    it('confirms the plane is not flying', function() {
      plane.land(airport);
      expect(plane.isFlying).toEqual(false);
    });
  });

  describe('#takeOff', function() {

    beforeEach(function() {
      plane.land(airport);
    });

    it('raises an error when the weather is stormy', function() {
      error = "Cannot take off when weather is stormy";
      plane1 = new Plane();
      spyOn(plane1.weather, 'isStormy').and.returnValue(true);
      expect(function () { plane1.takeOff(airport); }).toThrowError( error );
    });

    it('confirms the plane is flying', function() {
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    it('confirms departure with a message', function() {
      departureMessage = 'The plane has departed the airport';
      expect(plane.takeOff(airport)).toEqual(departureMessage);
    });
  });
});
