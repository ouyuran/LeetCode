export default function minDistance(word1: string, word2: string): number {
  const cache: Map<string, number> = new Map();
  const r = run(word1, word2);
console.log(cache);
return r;
  function run(word1: string, word2: string): number {
    if (word1.length === 0) return word2.length;
    if (word2.length === 0) return word1.length;
    const key = `${word1}_${word2}`;
    if (cache.has(key)) return cache.get(key) as number;

    const r = word1[0] === word2[0] ?
      run(word1.substring(1), word2.substring(1))
      : Math.min(
        run(word1.substring(1), word2) + 1,
        run(word1, word2.substring(1)) + 1,
        run(word1.substring(1), word2.substring(1)) + 1
      );
    cache.set(key, r);
    return r;
  }
};