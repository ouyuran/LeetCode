import oddEvenList, { ListNode, toArray } from '../src/leet328'
import { expect } from 'chai'


describe("leet code 328", () => {

  it("case 1", () => {
    const n5: ListNode = {val: 5, next: null};
    const n4: ListNode = {val: 4, next: n5};
    const n3: ListNode = {val: 3, next: n4};
    const n2: ListNode = {val: 2, next: n3};
    const n1: ListNode = {val: 1, next: n2};
    expect(toArray(oddEvenList(n1))).to.deep.equal([1, 3, 5, 2, 4]);
  })

  it("case 2", () => {
    const n7: ListNode = {val: 7, next: null};
    const n6: ListNode = {val: 4, next: n7};
    const n5: ListNode = {val: 6, next: n6};
    const n4: ListNode = {val: 5, next: n5};
    const n3: ListNode = {val: 3, next: n4};
    const n2: ListNode = {val: 1, next: n3};
    const n1: ListNode = {val: 2, next: n2};
    expect(toArray(oddEvenList(n1))).to.deep.equal([2,3,6,7,1,5,4]);
  })

})