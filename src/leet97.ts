export default function isInterleave(s1: string, s2: string, s3: string): boolean {
  // console.log(s1, s2, s3);
  const cache: Map<String, boolean> = new Map();
  return run(s1, s2, s3);

  function run(s1: string, s2: string, s3: string): boolean {
    if (s3.length !== s1.length + s2.length) return false;
    if (s1 === '' && s2 === '' && s3 === '') return true;
    const key = `${s1}_${s2}_${s3}`;
    if (cache.has(key)) return cache.get(key) as boolean;
    const r = (
      s1[0] !== undefined &&
      s1[0] === s3[0] &&
      run(s1.substring(1), s2, s3.substring(1))
    ) || (
        s2[0] !== undefined &&
        s2[0] === s3[0] &&
        run(s1, s2.substring(1), s3.substring(1))
      )
    cache.set(key, r);
    return r;
  }


};