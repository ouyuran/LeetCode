import fn from "../src/leet10";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    expect(fn('aa', 'a')).to.equal(false);
  })

  it("case 2", () => {
    expect(fn('aa', 'a*')).to.equal(true);
  })

  it("case 3", () => {
    expect(fn('ab', '.*')).to.equal(true);
  })

  it("case 4", () => {
    expect(fn('aab', 'c*a*b*')).to.equal(true);
  })

  it("case 5", () => {
    expect(fn('mississippi', 'mis*is*p*.')).to.equal(false);
  })

  it("case 6", () => {
    expect(fn('ab', '.*c')).to.equal(false);
  })

  it("case 7", () => {
    expect(fn('a', '.*..a*')).to.equal(false);
  })

  it("case 8", () => {
    expect(fn('aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*c')).to.equal(false);
  })

})