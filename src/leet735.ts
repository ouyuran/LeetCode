export default function fn(asteroids: number[]): number[] {
  let out: number[] = [];

  asteroids.forEach(a => {
    let r: number[] = [];
    let continueHit: boolean = false;
    out.push(a);
    do {
      const right = out.pop();
      const left = out.pop();
      const r = hit(left, right as number);
      continueHit = r.length === 1 && r[0] < 0 && out[out.length - 1] > 0;
      out = [...out, ...r];
    } while (continueHit)
    console.log(out)
  })

  return out;
}

function hit(a1: number | undefined, a2: number): number[] {
  console.log(`hit ${a1} ${a2}`)
  if(!a1) return [a2];
  if(a1 > 0 && a2 < 0) {
    const sum = a1 + a2;
    if (sum === 0) {
      return [];
    } else if (sum < 0) {
      return [a2];
    } else {
      return [a1];
    }
  } else {
    return [a1, a2];
  }
}