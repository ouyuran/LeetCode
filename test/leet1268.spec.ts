import fn from "../src/leet1268";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")).to.deep.equal(
      [
        ["mobile", "moneypot", "monitor"],
        ["mobile", "moneypot", "monitor"],
        ["mouse", "mousepad"],
        ["mouse", "mousepad"],
        ["mouse", "mousepad"]
      ]
    );
  })

  it("case 2", () => {
    expect(fn(["havana"], "havana")).to.deep.equal([["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]]);
  })

  it("case 3", () => {
    expect(fn(["bags","baggage","banner","box","cloths"], "bags")).to.deep.equal([["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]);
  })

  it("case 4", () => {
    expect(fn(["havana"], "tatiana")).to.deep.equal([[],[],[],[],[],[],[]]);
  })

})