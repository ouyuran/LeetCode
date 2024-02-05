import fn from "../src/leet841";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn([[1],[2],[3],[]])).to.equal(true);
  })

  it("case 2", () => {
    expect(fn([[1,3],[3,0,1],[2],[0]])).to.equal(false);
  })

})