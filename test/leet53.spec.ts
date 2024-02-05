import fn from "../src/leet53";
import { expect } from "chai";

describe("leet53", () => {

  it("case 1", () => {
    expect(fn([-2,1,-3,4,-1,2,1,-5,4])).to.equal(6);
  })

  it("case 2", () => {
    expect(fn([1])).to.equal(1);
  })

  it("case 3", () => {
    expect(fn([5,4,-1,7,8])).to.equal(23);
  })

})