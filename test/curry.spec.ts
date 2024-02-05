import curry from "../src/curry";
import { expect } from "chai";

function add3(n1: number, n2: number, n3: number): number {
  return n1 + n2 + n3;
}

describe("leet code ", () => {

  
  it("case 1", () => {
    const curryAdd = curry(add3);
    expect(curryAdd(1 , 2, 3)).to.equal(6);
  })

  it("case 2", () => {
    const curryAdd = curry(add3);
    expect(curryAdd(1)(2)(3)).to.equal(6);
  })

  it("case 3", () => {
    const curryAdd = curry(add3);
    expect(curryAdd(1, 2)(3)).to.equal(6);
  })

  it("case 4", () => {
    const curryAdd = curry(add3);
    expect(curryAdd(1)(2, 3)).to.equal(6);
  })

})