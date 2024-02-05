// export default function wordBreak(s: string, wordDict: string[]): boolean {
//     const memo: Map<string, boolean> = new Map();
//     return doBreak(s);

//     function doBreak(s: string): boolean {
//       if (s === '') return true;
//       if (memo.has(s)) return memo.get(s) as boolean;
//       const r =  wordDict.filter(pre => s.startsWith(pre)).some(pre => {
//         const preLength = pre.length;
//         const rest = s.slice(preLength);
//         return doBreak(rest);
//       })
//       memo.set(s, r);
//       return r;
//     }
// };
// track back 71ms

export default function wordBreak(s: string, wordDict: string[]): boolean {
  const dict = new Set(wordDict);
  const dp: boolean[] = [true];
  for (let i = 1; i <= s.length; i++) {
    const cur = s.substring(0, i);
    let match = false;
    for (let j = 0; j < i; j++) {
      const rest = cur.substring(j);
      if (dp[j] && dict.has(rest)) {
        match = true;
        break;
      }
    }
    dp[i] = match;
  }
  return dp.pop() as boolean;
}
// dp 64ms