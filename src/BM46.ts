export function GetLeastNumbers_Solution(input: number[], k: number): number[] {
  // write code here
  const numbersCount: number[] = [];
  input.forEach(number => {
    numbersCount[number] = numbersCount[number] ? numbersCount[number] + 1 : 1;
  })
  let total = k;
  let out: number[] = [];
  while (total > 0) {
    for(let i = 0; i <= 1000; i++) {
      if (numbersCount[i]) {
        out = [...out, ...getNumberTimes(i, numbersCount[i])]
        total -= numbersCount[i]
      }
    }
  }
  return out.slice(0, k);
}

function getNumberTimes(val: number, times: number): number[] {
  const numbers: number[] = [];
  for(let i = 0; i < times; i++) {
    numbers.push(val);
  }
  return numbers;
}