import fn from "../src/leet3014";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn('abcde')).to.equal(5);
  })

  it("case 2", () => {
    expect(fn('xycdefghij')).to.equal(12);
  })

})