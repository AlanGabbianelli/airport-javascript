describe("Plane", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
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
      expect(plane.land(airport)).toEqual('The plane has landed at the airport');
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
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(function () { plane.takeOff(airport); }).toThrowError("Cannot take off when weather is stormy");
    });

    it('confirms the plane is flying', function() {
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    it('confirms departure with a message', function() {
      expect(plane.takeOff(airport)).toEqual('The plane has departed the airport');
    });
  });
});
