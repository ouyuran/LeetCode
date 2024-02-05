import fn from "../src/leet97";
import { expect } from "chai";

describe("leet97", () => {

  it("case 1", () => {
    expect(fn("aabcc", "dbbca", "aadbbbaccc")).to.equal(false);
  })

  it("case 1", () => {
    expect(fn("aabcc", "dbbca", "aadbbcbcac")).to.equal(true);
  })

  it("case 3", () => {
    expect(fn("", "", "")).to.equal(true);
  })

})