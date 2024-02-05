export default class Heap {
  capacity: number
  arr: number[]

  constructor(capacity?: number) {
    this.capacity = capacity ?? Infinity;
    this.arr = [];
  }

  isFull(): boolean {
    return this.arr.length >= this.capacity;
  }

  get(i: number): number {
    return this.arr[i];
  }

  getLeftChildIndex(i: number): number {
    return (i + 1) * 2 - 1;
  }

  getRightChildIndex(i: number): number {
    return (i + 1) * 2;
  }

  getParentIndex(i: number): number {
    return Math.floor((i + 1) / 2) - 1;
  }

  pop(): number | undefined {
    if (this.arr.length < 1) return undefined;
    if (this.arr.length === 1) return this.arr.pop();
    this.swap(0, this.arr.length - 1);
    const top = this.arr.pop();
    const goDown = (cur: number) => {
      const lIndex = this.getLeftChildIndex(cur);
      const rIndex = this.getRightChildIndex(cur);
      const lValue = this.get(lIndex) ?? Infinity;
      const rValue = this.get(rIndex) ?? Infinity;
      const curValue = this.get(cur);
      const min = Math.min(curValue, lValue, rValue);
      if (min === curValue) {
        // do nothing
        return;
      } else if (min === lValue) {
        this.swap(cur, lIndex);
        goDown(lIndex);
      } else { //right
        this.swap(cur, rIndex);
        goDown(rIndex);
      }
    }
    goDown(0);

    return top;
  }

  swap(i: number, j: number) {
    if (i < 0 || i >= this.arr.length || j < 0 || j >= this.arr.length) {
      throw Error (`Invalid index in swap ${i} ${j}`);
    }
    if (i === j) return;
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  add(n: number) {
    if (this.isFull()) {
      if (n <= this.get(0)) return;
      this.pop();
    }
    this.arr.push(n);
    const goUp = (cur: number) => {
      if (cur === 0) {
        return;
      }
      const pIndex = this.getParentIndex(cur);
      const pValue = this.get(pIndex);
      if (this.get(cur) < pValue) {
        this.swap(cur, pIndex);
        goUp(pIndex);
      }
    }
    goUp(this.arr.length - 1);
  }
  

  toString(): string {
    return this.arr.toString();
  }

}