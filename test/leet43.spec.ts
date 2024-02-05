import fn from "../src/leet43";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn('2', '3')).to.equal('6');
  })

  it("case 2", () => {
    expect(fn('123', '456')).to.equal('56088');
  })

})