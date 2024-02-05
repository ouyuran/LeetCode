import fn from "../src/leet3015";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn(3, 1, 3)).to.deep.equal([6, 0, 0]);
  })

  it("case 2", () => {
    expect(fn(5, 2, 4)).to.deep.equal([10, 8, 2, 0, 0]);
  })

  it("case 3", () => {
    expect(fn(4, 1, 1)).to.deep.equal([6, 4, 2, 0]);
  })

  it.only("case 4", () => {
    expect(fn(5, 1, 5)).to.deep.equal([10, 10, 0, 0, 0]);
  })

  it.only("case 5", () => {
    expect(fn(100, 7, 46)).to.deep.equal([10, 10, 0, 0, 0]);
  })

})