import fn from "../src/leet198";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([1,2,3,1])).to.equal(4);
  })

  it("case 2", () => {
    expect(fn([2,7,9,3,1])).to.equal(12);
  })

})