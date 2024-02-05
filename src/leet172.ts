export default function trailingZeroes(n: number): number {
    if (n === 0) return 0;
    let has2 = 0;
    let has5 = 0;
    let total = 0;
    for (let i = 1; i <= n; i++) {
      const [numOf2, numOf5, numOf10] = getNumOf2510(i);
      has2 += numOf2;
      has5 += numOf5;
      total += numOf10;
    }
    return total + Math.min(has2, has5)
};

export function getNumOf2510(n: number): [number, number, number] {
  const [numOf10, rest10] = getNumOfK(n, 10);
  const [numOf5, rest5] = getNumOfK(rest10, 5);
  const [numOf2, rest2] = getNumOfK(rest5, 2);

  return [numOf2, numOf5, numOf10]
}

export function getNumOfK(n: number, k:number): [number, number] {
  let num = 0;
  while(n % k === 0) {
    num++;
    n = n / k;
  }
  return [num, n]
}