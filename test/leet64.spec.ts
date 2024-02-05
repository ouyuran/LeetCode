import fn from "../src/leet64";
import { expect } from "chai";

describe("leet64", () => {

  it("case 1", () => {
    expect(fn([[1,3,1],[1,5,1],[4,2,1]])).to.equal(7);
  })

  it("case 2", () => {
    expect(fn([[1,2,3],[4,5,6]])).to.equal(12);
  })

})