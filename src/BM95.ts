export function candy(arr: number[]): number {
  // write code here
  let candyNumber: number[] = [];
  getLow(arr).forEach(lowIndex => {
    candyNumber[lowIndex] = 1;

    // go left
    let i = lowIndex - 1;
    while(
      i >=0 &&
      arr[i] > arr[lowIndex] &&
      arr[i] >= arr[i + 1]) {
        const currentCandyNumber = arr[i] > arr[i + 1] ? candyNumber[i + 1] + 1 : candyNumber[i + 1] ;
        if(candyNumber[i] === undefined) {
          candyNumber[i] = currentCandyNumber
        } else {
          candyNumber[i] = Math.max(candyNumber[i], currentCandyNumber);
          break;
        }
        i++;
    }

    // go right
    let j = lowIndex + 1;
    while(
      j < arr.length &&
      arr[j] > arr[lowIndex] && 
      arr[j] >= arr[j - 1]) {
        const currentCandyNumber = arr[j] > arr[j - 1] ? candyNumber[j - 1] + 1 : candyNumber[j - 1];
        if(candyNumber[j] === undefined) {
          candyNumber[j] = currentCandyNumber
        } else {
          candyNumber[j] = Math.max(candyNumber[j], currentCandyNumber);
          break;
        }
        j++;
    }
  })
  console.log(candyNumber)
  return candyNumber.reduce((a, b) => a + b, 0);
}

function getLow(arr: number[]): number[] {
  let pre = 1001;
  let tmp: number[] = [];
  let out: number[] = [];
  for(let i = 0; i < arr.length; i++) {
    const currentVal = arr[i];
    const next = arr[i + 1] ?? 1001;
    if(currentVal < pre) {
      if(currentVal < next) {
        tmp.push(i);
        out = [...out, ...tmp];
        tmp = [];
        pre = currentVal;
      } else if (currentVal === next) {
        tmp.push(i);
      } else {
        pre = currentVal;
      }
    } else {
      pre = currentVal;
    }
  }
  return out;
}

console.log(candy([1, 1, 2]))
console.log(candy([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]))
console.log(candy([10,4,10,10,4]))

// console.log(getLow([1, 2, 3]))
// console.log(getLow([1, 1, 2, 3]))
// console.log(getLow([3, 2, 1]))
// console.log(getLow([3, 2, 1, 1]))
// console.log(getLow([2, 1, 2]))
// console.log(getLow([2, 1, 1, 2]))
// console.log(getLow([2, 1, 1, 2, 5, 4, 6]))
// console.log(getLow([1, 1, 1, 1]))
