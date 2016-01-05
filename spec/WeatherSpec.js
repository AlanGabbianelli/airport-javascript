describe('Weather', function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('is sometimes sunny', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.isStormy()).toEqual(false);
  });


  it('is sometimes stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.isStormy()).toEqual(true);
  });

});
