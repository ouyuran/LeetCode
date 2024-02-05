import fn, { getMedian } from "../src/leet4";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(getMedian([1,2,3])).to.deep.equal({
      median: 2,
      leftNum: 1
    });
  })

  it("case 2", () => {
    expect(getMedian([1,2,3,4])).to.deep.equal({
      median: 2.5,
      leftNum: 2
    });
  })

})