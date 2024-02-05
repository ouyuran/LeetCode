export default function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const out = Array(m).fill(Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        if (obstacleGrid[0][0] == 1) return 0
        out[0][0] = 1;
        continue;
      }
      const isStone = obstacleGrid[i][j] === 1;
      const left = out[i]?.[j - 1] ?? 0;
      const top = out[i - 1]?.[j] ?? 0;
      if (isStone) {
        out[i][j] = 0;
      } else {
        out[i][j] = left + top;
      }
    }
  }
  return out.pop()?.pop() as number;
};