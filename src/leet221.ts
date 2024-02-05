export default function maximalSquare(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const out: number[][] = Array(m)
  for (let i = 0; i < m; i++) {
    out[i] = new Array(n); // create a new array instance for each element
  }
  let max: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const cur = matrix[i][j];
      if (cur === '0') {
        out[i][j] = 0;
        continue;
      }

      const lt = out[i - 1]?.[j - 1];
      if (!lt) {
        out[i][j] = 1;
        max = Math.max(max, out[i][j]);
        continue;
      }

      const row = matrix[i].slice(j - lt, j);
      const column = matrix.slice(i - lt, i).map(a => a[j]);
      console.log(row)
      console.log(column)
      let k = 1;
      while(row.length > 0) {
        const lastElementOfRow = row.pop();
        const lastElementOfCol = column.pop();
        if (lastElementOfRow === '1' && lastElementOfCol === '1') {
          k++;
        } else {
          break;
        }
      }
      out[i][j] = k;
      max = Math.max(max, out[i][j]);
    }
  }
  console.log(out);
  return max * max;
};

let a =
  [
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 0, 1, 2, 2, 3, 3, 3, 3, 3, 3, 0, 2, 2, 3, 3, 3, 2],
    [1, 2, 1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 3, 0, 2, 2, 3, 4, 3],
    [1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 4, 3, 0, 2, 2, 3, 4],
    [1, 2, 3, 0, 2, 2, 3, 0, 4, 5, 5, 5, 5, 4, 3, 1, 3, 0, 3],
    [1, 0, 2, 3, 1, 3, 3, 3, 1, 5, 6, 6, 5, 5, 0, 3, 2, 3, 1],
    [1, 1, 1, 2, 4, 2, 4, 3, 4, 2, 6, 7, 6, 5, 4, 0, 3, 2, 0],
    [0, 0, 1, 2, 3, 4, 3, 4, 4, 5, 3, 7, 7, 6, 4, 0, 1, 3, 2],
    [1, 1, 0, 1, 2, 3, 4, 4, 5, 5, 0, 3, 7, 7, 5, 3, 1, 2, 3],
    [1, 2, 1, 1, 2, 3, 4, 5, 5, 0, 5, 1, 3, 7, 6, 4, 4, 2, 3],
    [0, 1, 2, 0, 1, 2, 3, 0, 4, 5, 1, 5, 2, 4, 6, 5, 5, 5, 3],
    [1, 1, 2, 2, 0, 1, 2, 3, 1, 4, 5, 2, 6, 3, 0, 5, 5, 5, 5],
    [1, 2, 2, 2, 2, 1, 2, 2, 4, 2, 4, 6, 3, 7, 3, 1, 6, 6, 6],
    [1, 2, 3, 3, 2, 3, 2, 3, 3, 4, 3, 5, 7, 4, 7, 4, 2, 7, 7],
    [1, 2, 3, 4, 3, 3, 4, 3, 4, 4, 5, 4, 6, 8, 4, 7, 5, 0, 7],
    [1, 2, 3, 4, 4, 4, 4, 5, 0, 4, 4, 0, 3, 5, 0, 3, 6, 5, 1],
    [1, 2, 3, 4, 5, 5, 0, 4, 5, 1, 4, 4, 1, 4, 4, 0, 3, 6, 5]
  ]