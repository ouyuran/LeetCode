export default function fn(s: string): number {
  const charCount: Map<string, number> = new Map();
  s.split('').forEach((c, i) => {
    if (charCount.has(c)) {
      const count = charCount.get(c) as number;
      charCount.set(c, count + 1);
    } else {
      charCount.set(c, 1);
    }
  })
  const arr = Array
    .from(charCount, ([char, count]) => ({char, count}))
    .sort((a, b) => a.count - b.count)
  
  let press = 1;
  let keyLeft = 8;
  let total = 0;
  while(arr.length > 0) {
    total += arr.pop()?.count as number * press;
    keyLeft--;
    if(keyLeft === 0) {
      press++;
      keyLeft = 8;
    }
  }
  return total;
}