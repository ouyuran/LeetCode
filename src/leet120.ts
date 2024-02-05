export default function minimumTotal(triangle: number[][]): number {
    let preout: number[] = triangle[0];
    let out: number[] = [];
    for (let i = 1; i < triangle.length; i++) {
      triangle[i].forEach((num, j) => {
        out.push(Math.min(
          preout[j] ?? Infinity,
          preout[j - 1] ?? Infinity
        ) + num)
      })

      preout = out;
      out = [];
    }
    return Math.min(...preout);
};