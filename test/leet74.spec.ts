import fn, {bns} from "../src/leet74";
import { expect } from "chai";

describe("leet74", () => {

  it("case 1", () => {
    expect(fn([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).to.equal(true);
  })

  it("case 2", () => {
    expect(fn([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).to.equal(false);
  })

  it("case 3", () => {
    expect(bns([23,30,34,60], 30)).to.equal(true);
  })

  it("case 3", () => {
    expect(bns([23,30,34,60], 1)).to.equal(false);
  })

  it.only("case 3", () => {
    expect(fn([[1,3]], 2)).to.equal(false);
  })

})