import fn from "../src/leet215";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([3,2,1,5,6,4], 2)).to.equal(5);
  })

  it("case 2", () => {
    expect(fn([3,2,3,1,2,4,5,5,6], 4)).to.equal(4);
  })

})