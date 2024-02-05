export default function minPathSum(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cur = grid[i][j];
      const left = grid[i]?.[j - 1] ?? Infinity;
      const top = grid[i - 1]?.[j] ?? Infinity;
      if (i === 0 && j === 0) {
        // do nothing
      } else {
        grid[i][j] = Math.min(left, top) + cur;
      }
    }
  }
  console.log(grid);
  return grid.pop()?.pop() as number;
};