export default function isMatch(s: string, p: string): boolean {
  const cache: Set<string> = new Set();
  let hit = 0;
  let total = 0;
  const r = fn(0, 0);
  console.log(hit);
  console.log(total);
  return r;

  function fn(i: number, j: number): boolean {
    total++;
    if(cache.has(`${i},${j}`)) {
      hit++;
      return false;
    }
    // console.log(s.substring(i) + ' , ' + p.substring(j));
    if (i >= s.length && j >= p.length) return true;
    if (i < s.length && j >= p.length) return false;
    
    if (p[j + 1] !== '*') {
      if (i >= s.length && j < p.length) {
        cache.add(`${i},${j}`)
        return false;
      } else if (p[j] === s[i] || p[j] === '.') {
        return fn(i + 1, j + 1)
      } else {
        cache.add(`${i},${j}`)
        return false;
      }
    } else {
      if (i >= s.length) {
        return fn(i, j + 2)
      } else if (p[j] === s[i] || p[j] === '.') {
        return fn(i + 1, j + 2) ||
          fn(i, j + 2) ||
          fn(i + 1, j)
      } else {
        return fn(i, j + 2)
      }
    }
  }
}