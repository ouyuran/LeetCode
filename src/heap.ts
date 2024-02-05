export default function createHeap(isMax: boolean = true) {
  const arr: number[] = [];

  function insert(n: number) {
    arr.push(n);
    const currentIndex = arr.length;
    insertSwap(currentIndex);
  }

  function insertSwap(i: number): void {
    if (i === 1) return;
    const parent = Math.floor(i / 2);
    if (compare(get(i), get(parent))) {
      swap(i, parent);
      insertSwap(parent);
    } else {
      return;
    }
  }

  function pop(): number | undefined {
    if (arr.length === 0) return undefined;
    swap(1, arr.length);
    const r = arr.pop();
    heapify();
    return r;
  }

  function getTop(): number {
    return get(1);
  }

  function getTop2(): number {
    return get(3) > get(2) ? get(3) : get(2);
  }

  function size(): number {
    return arr.length;
  }

  function isOdd(): boolean {
    return arr.length % 2 === 0;
  }

  // consider the origin heap is heapified, only call this after pop
  // to be update if need to handle a random order arr
  function heapify(): void {
    let current = 1;
    while (current <= arr.length) {
      const currentVal = get(current);
      const left = current * 2;
      const right = left + 1;
      const leftVal = get(left);
      const rightVal = get(right);
      if (!leftVal && !rightVal) {
        return;
      } else if (!rightVal) {
        if (compare(leftVal, currentVal)) {
          swap(left, current);
          current = left;
        } else {
          return;
        }
      } else if (compare(leftVal, rightVal)) {
        if (compare(leftVal, currentVal)) {
          swap(left, current);
          current = left;
        } else {
          return;
        }
      } else {
        if (compare(rightVal, currentVal)) {
          swap(current, right);
          current = right;
        } else {
          return;
        }
      }
    }
  }

  function get(i: number): number {
    validateHeapIndex(i);
    return arr[i - 1];
  }

  function swap(i: number, j: number): void {
    validateHeapIndex(i);
    validateHeapIndex(j);
    const temp = get(i);
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = temp;
  }

  function validateHeapIndex(n: number): void {
    if (n < 1) throw Error('getFromHeapIndex, index < 1');
  }

  function compare(m: number, n: number): boolean {
    return isMax ? m > n : m < n;
  }

  function print(): void {
    console.log(arr);
  }

  return {
    insert,
    pop,
    getTop,
    getTop2,
    size,
    isOdd,
    print
  }
}