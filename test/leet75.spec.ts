import fn, { overlap, compare } from "../src/leet75";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(overlap([1, 2], [2, 3])).to.equal(false);
    expect(overlap([0, 1], [2, 3])).to.equal(false);
    expect(overlap([1, 3], [2, 4])).to.equal(true);
  })

  it("case 2", () => {
    expect(compare([1, 2], [2, 3])).to.lt(0);
    expect(compare([1, 2], [1, 2])).to.equal(0);
    expect(compare([1, 2], [1, 3])).to.gt(0);
  })

  it("case 3", () => {
    expect(
      [
        [1, 2],
        [2, 3],
        [2, 4],
        [3, 5]
      ].sort(compare)
    ).to.deep.equal(
      [
        [1, 2],
        [2, 4],
        [2, 3],
        [3, 5]
      ]
    )
  })

  it("case 4", () => {
    expect(fn([[1, 2], [2, 3], [3, 4], [1, 3]])).to.deep.equal(1);
  })

  it("case 5", () => {
    expect(fn([[1, 2], [1, 2], [1, 2]])).to.deep.equal(2);
  })

  it("case 6", () => {
    expect(fn([[1, 2], [2, 3]])).to.deep.equal(0);
  })

  it.only("case 7", () => {
    expect(fn([[81, 97], [-71, 60], [36, 97], [76, 96], [59, 68], [54, 88], [-65, 40], [83, 84], [27, 50], [-59, -50], [73, 78], [50, 57], [-49, 81], [-16, 90], [-83, -23], [-58, 98], [78, 99], [-57, 81], [-2, 85], [-88, 45], [85, 90], [-64, 17], [76, 78], [-17, 5], [-98, 15], [86, 100]])).to.deep.equal(18);
  })

})