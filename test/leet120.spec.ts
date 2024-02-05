import fn from "../src/leet120";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([[2],[3,4],[6,5,7],[4,1,8,3]])).to.equal(11);
  })

  it("case 2", () => {
    expect(fn([[-10]])).to.equal(-10);
  })

})