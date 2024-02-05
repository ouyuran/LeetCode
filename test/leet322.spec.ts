import fn from "../src/leet322";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([1, 2, 5], 11)).to.equal(3);
  })

  it("case 2", () => {
    expect(fn([2], 3)).to.equal(-1);
  })

  it("case 3", () => {
    expect(fn([1], 0)).to.equal(0);
  })
})