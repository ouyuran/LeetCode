import fn from "../src/leet735";
import { expect } from "chai";

describe("leet code 735", () => {

  it("case 1", () => {
    expect(fn([5,10,-5])).to.deep.equal([5, 10]);
  })

  it("case 2", () => {
    expect(fn([8,-8])).to.deep.equal([]);
  })

  it("case 3", () => {
    expect(fn([10,2,-5])).to.deep.equal([10]);
  })

  it.only("case 4", () => {
    expect(fn([-2,-1,1,2])).to.deep.equal([]);
  })

})