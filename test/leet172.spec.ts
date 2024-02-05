import fn, {getNumOf2510, getNumOfK} from "../src/leet172";
import { expect } from "chai";

describe("leet172", () => {

  it("case 1", () => {
    expect(fn(3)).to.equal(0);
  })

  it("case 2", () => {
    expect(fn(5)).to.equal(1);
  })

  it("case 3", () => {
    expect(fn(0)).to.equal(0);
  })

  it("case 4", () => {
    expect(getNumOfK(75, 5)).to.deep.equal([2, 3]);
  })

  it("case 5", () => {
    expect(getNumOfK(1024, 2)).to.deep.equal([10, 1]);
  })

  it("case 6", () => {
    expect(getNumOf2510(100)).to.deep.equal([0, 0, 2]);
  })

  it("case 7", () => {
    expect(getNumOf2510(40)).to.deep.equal([2, 0, 1]);
  })

})