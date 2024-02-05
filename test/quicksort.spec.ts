import fn from "../src/quicksort";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
  })

  it("case 2", () => {
    expect(fn([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
  })

  it("case 3", () => {
    expect(fn([5,1,2,3,4])).to.equal([1,2,3,4,5]);
  })

})