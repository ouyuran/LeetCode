import fn from "../src/leet300";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([10,9,2,5,3,7,101,18]
      )).to.equal(4);
  })

  it("case 2", () => {
    expect(fn([0,1,0,3,2,3])).to.equal(4);
  })

  it("case 3", () => {
    expect(fn([7,7,7,7,7,7])).to.equal(1);
  })

  it("case 4", () => {
    expect(fn([1,3,6,7,9,4,10,5,6])).to.equal(6);
  })

})