export function solve(grid: string[][]): number {
  // write code here
  let number = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1') {
        number++;
        walk({x: i, y: j});
      }
    }
  }
  return number;

  function walk(p: Position) {
    if (grid[p.x]?.[p.y] === '1') {
      grid[p.x][p.y] = '0';
    } else {
      return;
    }
    doWalk(p, {x: -1, y: 0}); // left
    doWalk(p, {x: 1, y: 0}); // right
    doWalk(p, {x: 0, y: -1}); // down
    doWalk(p, {x: 0, y: 1}); // up
  }

  function doWalk(p: Position, d: Direction) {
    walk({
      x: p.x + d.x,
      y: p.y + d.y
    })
  }
}

interface Position {
  x: number
  y: number
}

interface Direction {
  x: -1 | 0 | 1
  y: -1 | 0 | 1
}

console.log(solve([['1','1','0','0','0'],['0','1','0','1','1'],['0','0','0','1','1'],['0','0','0','0','0'],['0','0','1','1','1']]))
console.log(solve([['1','1'],['1','1']]))