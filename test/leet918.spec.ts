import fn from "../src/leet918";
import { expect } from "chai";

describe("leet918", () => {

  it("case 1", () => {
    expect(fn([1,-2,3,-2])).to.equal(3);
  })

  it("case 2", () => {
    expect(fn([5,-3,5])).to.equal(10);
  })

  it("case 3", () => {
    expect(fn([3,-2,2,-3])).to.equal(3);
  })

})