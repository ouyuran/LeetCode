import fn from "../src/leet373";
import { expect } from "chai";

describe("leet373", () => {

  it("case 1", () => {
    expect(fn([1,7,11], [2,4,6], 3)).to.deep.equal([[1,2],[1,4],[1,6]]);
  })

  it("case 2", () => {
    expect(fn([1,1,2], [1,2,2], 2)).to.equal([[1,1],[1,1]]);
  })

  it("case 3", () => {
    expect(fn([1,2], [3], 3)).to.equal([[1,3],[2,3]]);
  })

})