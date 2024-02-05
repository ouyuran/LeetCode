export default function countOfPairs(n: number, x: number, y: number): number[] {
    const hourses = init(n, x, y);
    const map: Map<number, string[]> = new Map();
    const out: number[] = [];
    // console.log(hourses);
    // console.log(getMiniDistance(hourses, 1, 2))
    // console.log(getMiniDistance(hourses, 1, 4))
    // return [];
    for (let i = 1; i <=n; i++) {
      for (let j = i + 1; j <= n; j++) {
        const dis = getMiniDistance(hourses, i, j);
        if (map.has(dis)) {
          map.get(dis)?.push(`${i} -> ${j}`)
        } else {
          map.set(dis, [`${i} -> ${j}`])
        }
      }
    }
    for (let i = 1; i <= n; i++) {
      out[i - 1] = map.get(i) ? (map.get(i) as string[]).length * 2 : 0
    }
    console.log(map)
    return out;
};

function getMiniDistance(hourses: hourse[], start: number, end: number): number {
  const startHourse: hourse = hourses[start - 1];
  const desHourse: hourse = hourses[end - 1];
  return walk(0, startHourse, []);

  function walk(d: number, cur: hourse, path: hourse[]): number {
    // console.log(`walk d ${d}, cur ${cur.index}`)
    if (cur === desHourse) return d;
    if (path.includes(cur) || cur.path.length === 0) return Infinity;
    else {
      const dis: number[] = cur.path
        .filter(next => next !== cur)
        .map(next => walk(d+1, next, [...path, cur]));
      return Math.min(...dis);
    }
    // else return Math.min(...cur.path.map(next => walk(d+1, next, [...path, cur])));
  }
}

function init(n: number, x: number, y: number): hourse[] {
  const hourses: hourse[] = [];
  for(let i = 1; i <= n; i++) {
    const hourse: hourse = {index: i, path: []}
    if (i > 1) {
      hourses[hourses.length - 1]?.path.push(hourse);
      hourse.path.push(hourses[hourses.length - 1]);
    }
    hourses.push(hourse);
  }
  if (x !== y) {
    const start = Math.min(x, y);
    const end = Math.max(x, y);
    hourses[start - 1].path.push(hourses[end - 1]);
    hourses[end - 1].path.push(hourses[start - 1]);
  }
  return hourses;
}

type hourse = {
  index: number
  path: hourse[]
}