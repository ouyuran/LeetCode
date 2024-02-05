import fn from "../src/leet139";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn('leetcode', ["leet", "code"])).to.equal(true);
  })

  it("case 2", () => {
    expect(fn("applepenapple", ["apple", "pen"])).to.equal(true);
  })

})