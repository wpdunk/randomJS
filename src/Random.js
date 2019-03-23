class Random {
  static run() {
    console.log("testing randomness");
    var chance = Math.random();
    console.log(chance);
    if (chance > 0.5) {
      console.log("high!");
      return "high";
    } else {
      console.log("low!");
      return "low";
    }
  }
}
