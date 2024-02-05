import longestOnes from '../src/leet1004';
import { expect } from 'chai'

describe("Leet code 1004", () => {
  it("case 1", () => {
    expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).to.equal(1)
  })
})