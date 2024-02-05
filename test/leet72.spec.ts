import fn from "../src/leet72";
import { expect } from "chai";

describe("leet72", () => {

  it("case 1", () => {
    expect(fn('horse', 'ros')).to.equal(3);
  })

  it("case 2", () => {
    expect(fn('intention', 'execution')).to.equal(5);
  })

})