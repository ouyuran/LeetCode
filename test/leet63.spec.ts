import fn from "../src/leet63";
import { expect } from "chai";

describe("leet63", () => {

  it("case 1", () => {
    expect(fn([[0,0,0],[0,1,0],[0,0,0]])).to.equal(2);
  })

  it("case 2", () => {
    expect(fn([[0,1],[0,0]])).to.equal(1);
  })

})