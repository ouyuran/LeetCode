import Heap from "../src/heapClass";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    const heap = new Heap(3);
    heap.add(3);
    heap.add(2);
    heap.add(1);
    expect(heap.arr).to.deep.equal([1, 3 ,2])
  })

  it("case 2", () => {
    const heap = new Heap(3);
    heap.add(3);
    heap.add(2);
    heap.add(1);
    heap.add(0);
    expect(heap.arr).to.deep.equal([1, 3 ,2])
  })

  it("case 3", () => {
    const heap = new Heap(3);
    heap.add(3);
    heap.add(2);
    heap.add(1);
    heap.add(5);
    expect(heap.arr).to.deep.equal([2, 3, 5])
  })

  it("case 3", () => {
    const heap = new Heap(4);
    heap.add(3);
    heap.add(2);
    heap.add(1);
    heap.add(5);
    heap.add(-5);
    heap.add(0);
    heap.add(15);
    heap.add(2);
    expect(heap.arr).to.deep.equal([2, 3, 5, 15])
  })

})