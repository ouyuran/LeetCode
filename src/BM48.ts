import createHeap from "./heap";

const left = createHeap();
const right = createHeap(false);
let mid: number | undefined = undefined;
// const {insert, pop, getTop, getTop2, size, isOdd} = createHeap();

function Insert(num: number): void {
  if(mid) {
    left.insert(Math.min(mid, num));
    right.insert(Math.max(mid, num));
    mid = undefined;
  } else {
    const leftVal = left.getTop();
    const rightVal = right.getTop();
    if (num < leftVal) {
      mid = left.pop();
      left.insert(num);
    } else if (num > rightVal) {
      mid = right.pop();
      right.insert(num);
    } else {
      mid = num;
    }
  }
}

function GetMedian(): string {
  return (mid ?? (left.getTop() + right.getTop()) / 2).toFixed(2);
}


[5,2,3,4,1,6,7,0,8].forEach(n => {
  Insert(n);
  console.log(GetMedian())
})

export default {
  Insert,
  GetMedian
}