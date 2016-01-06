describe("Airport", function() {

  var airport;
  var plane = null;

  beforeEach(function(){
    airport = new Airport();
  });

  it("Initializes as empty", function() {
    expect(airport.hangar).toEqual([]);
  });

  describe('#dock', function() {
    it("stores the plane inside the hangar", function() {
      airport.dock(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('#release', function() {
    it("releases the plane from the hangar", function() {
      airport.dock(plane);
      airport.release(plane);
      expect(airport.hangar).not.toContain(plane);
    });
  });

  describe('#capacity', function(){
    it("should have a capacity of 20", function(){
      expect(airport.CAPACITY).toEqual(20);
    });

    it("should not land planes if airport hangar is at capacity", function(){
      for (i = 0; i < 20; i++) { airport.dock(plane);};
      expect(function () { airport.dock(plane); }).toThrowError( 'Cannot land, airport is full' );
    });
  });

});
