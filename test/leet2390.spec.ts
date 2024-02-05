import removeStarts from "../src/leet2390";
import { expect } from "chai";

describe("leet code 2390", () => {

  it("case 1", () => {
    expect(removeStarts('leet**cod*e')).to.equal('lecoe')
  })

  it("case 2", () => {
    expect(removeStarts('erase*****')).to.equal('')
  })

})