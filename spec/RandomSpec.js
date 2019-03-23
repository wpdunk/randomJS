describe("Random", function() {
  it("sometimes returns 'high'", function() {
    spyOn(Math, "random").and.returnValue(0.9);
    expect(Random.run()).toEqual("high");
  });
  it("sometimes returns 'low'", function() {
    spyOn(Math, "random").and.returnValue(0.1);
    expect(Random.run()).toEqual("low");
  });
});
