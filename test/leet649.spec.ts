import fn from "../src/leet649";
import { expect } from "chai";

describe("leet code 649", () => {

  it("case 1", () => {
    expect(fn('RD')).to.equal('Radiant');
  })

  it("case 2", () => {
    expect(fn('RDD')).to.equal('Dire');
  })

  it.only("case 3", () => {
    expect(fn('DRRDRDRDRDDRDRDR')).to.equal('Radiant');
  })

})