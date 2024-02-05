export default function multiply(num1: string, num2: string): string {
  if(num1 === '0' || num2 === '0') return '0';
  let arr: number[][] = [];
  for(let i = 0; i < num1.length; i++) {
    for(let j = 0; j < num2.length; j++) {
      const r = parseInt(num1[num1.length - 1 - i]) * parseInt(num2[num2.length - 1 - j])
      console.log(r)
      arr[i + j] = [...(arr[i + j] ?? []), (r % 10)];
      if (r > 9) {
        arr[i + j + 1] = [...(arr[i + j + 1] ?? []), Math.floor(r / 10)];
      }
    }
  }
  console.log(arr);
  let k = 0;
  const s = (arr.map(a => {
    const sum = sumArr(a) + k;
    k = Math.floor(sum / 10);
    return sum % 10;
  })).reverse();
  return k > 0 ? k + s.join('') : s.join('')
}

function sumArr(nums: number[]): number {
  return nums.reduce((pre, cur) => pre + cur, 0);
}
