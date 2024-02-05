export default function fn(n: number): string[][] {
  const out: string[][][] = [];
  const arr = init(n);
  
  arrange(arr, {x: 0, y: 0}, n);
  const r = out.map(p => {
    return p.map(q => q.join('').replace(/X/g, '.'))
  })
  return r;

  function arrange(arr: string[][], p: Position | null, numOfQ: number): void {
    if(numOfQ === 0) {
      out.push(deepCopy(arr));
      return;
    } else if (p) {
      const nextP = findNextPosition(arr, p);
      if (nextP) {
        arrange(deepCopy(arr), next(nextP, n), numOfQ);
        arrange(setQ(deepCopy(arr), nextP), next(nextP, n), numOfQ - 1);
      }
    } else {
      // do nothing
    }
  }
  
}

function deepCopy(arr: string[][]): string[][] {
  return JSON.parse(JSON.stringify(arr));
}

/*
    7 0 1
    6 Q 2
    5 4 3
*/
export function setQ(arr: string[][], p: Position): string[][] {
  const n = arr.length;
  arr[p.x][p.y] = 'Q';
  const direction: Map<number, Step> = new Map();
  direction.set(0, {x: 0, y: -1});
  direction.set(1, {x: 1, y: -1});
  direction.set(2, {x: 1, y: 0});
  direction.set(3, {x: 1, y: 1});
  direction.set(4, {x: 0, y: 1});
  direction.set(5, {x: -1, y: 1});
  direction.set(6, {x: -1, y: 0});
  direction.set(7, {x: -1, y: -1});
  for(let d = 0; d <=7; d++) {
    const dir = direction.get(d) as Step;
    let i = p.x + dir.x;
    let j = p.y + dir.y;

    while(i >= 0 && i < n && j >=0 && j < n) {
      arr[i][j] = 'X';
      i += dir.x;
      j += dir.y;
    }
  }
  return arr;
}

function next(p: Position, n: number): Position | null {
  if (p.x === n - 1 && p.y === n - 1) return null;
  return p.y === n - 1 ? {x: p.x + 1, y: 0} : {x: p.x, y: p.y + 1};
}

export function findNextPosition(arr: string[][], p: Position): Position | null {
  const n = arr.length;
  let cur: Position | null = p;
  while (cur) {
    if (arr[cur.x][cur.y] === '.') break;
    cur = next(cur, n);
  }
  return cur;
}

interface Position {
  x: number
  y: number
}

interface Step {
  x: -1 | 0 | 1
  y: -1 | 0 | 1
}

export function init(n: number): string[][] {
  const arr: string[][] = [];
  for(let i = 0; i < n; i++) {
    arr.push([]);
    for(let j = 0; j < n; j++) {
      arr[i].push('.')
    }
  }
  return arr;
}