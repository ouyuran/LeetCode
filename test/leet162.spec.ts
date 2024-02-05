import fn from "../src/leet162";
import { expect } from "chai";

describe("leet162", () => {

  it("case 1", () => {
    expect(fn([1,2,3,1])).to.equal(2);
  })

  it("case 2", () => {
    expect(fn([1,2,1,3,5,6,4])).to.be.oneOf([1,5]);
  })

  it("case 2", () => {
    expect(fn([2, 1])).to.be.oneOf([0]);
  })

  it.only("case 4", () => {
    expect(fn([1, 2])).to.be.oneOf([1]);
  })

})