import fn, {findNextPosition, init, setQ} from "../src/leet51";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    const r = fn(4);
    expect(r.length).equal(2)
    expect(r).to.deep.include([".Q..","...Q","Q...","..Q."])
    expect(r).to.deep.include(["..Q.","Q...","...Q",".Q.."]);
  })

  it("case 9", () => {
    const r = fn(9);
    expect(r.length).equal(352)
  })

})

describe("find next position", () => {

  it("1", () => {
    const arr = [
      ['.', '.'],
      ['.', '.'],
    ]
    expect(findNextPosition(arr, {x: 0, y: 0})).to.deep.equal({x: 0, y: 0})
  })

  it("2", () => {
    const arr = [
      ['Q', 'Q'],
      ['Q', 'Q'],
    ]
    expect(findNextPosition(arr, {x: 0, y: 0})).to.deep.equal(null)
  })

  it("3", () => {
    const arr = [
      ['Q', 'Q'],
      ['.', '.'],
    ]
    expect(findNextPosition(arr, {x: 0, y: 1})).to.deep.equal({x: 1, y: 0})
  })

  it("4", () => {
    const arr = [
      ['Q', 'Q'],
      ['.', '.'],
    ]
    expect(findNextPosition(arr, {x: 1, y: 0})).to.deep.equal({x: 1, y: 0})
  })
})

describe("set Queen", () => {
  it("1", () => {
    const arr = init(4);
    setQ(arr, {x: 1, y: 1});
    console.log(arr)
    expect(arr).to.deep.equal(
      [
        ['X', 'X', 'X', '.'],
        ['X', 'Q', 'X', 'X'],
        ['X', 'X', 'X', '.'],
        ['.', 'X', '.', 'X']
      ]
    )
  })
})