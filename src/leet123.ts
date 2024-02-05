// export default function maxProfit(prices: number[]): number {
//     const n = prices.length;
//     console.log(n)
//     const profit: number[][] = new Array(n);
//     const maxProfit: number[] = []
//     let max: number = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (j === 0) {
//           profit[i] = [];
//           // maxProfit[i] = [];
//         }
//         if (j >= i) {
//           profit[i][j] = 0;
//           // maxProfit[i][j] = 0;
//         } else {
//           profit[i][j] = prices[i] - prices[j];
//         }
//       }
//     }
//     console.log(1);
//     for (let i = 0; i < n; i++) {
//       maxProfit[i] = maxProfitFrom(i + 1,  i + 1);
//     }
//     console.log(2);
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < i; j++) {
//         const cur = profit[i][j];
//         const maxRest = maxProfit[i] ?? 0;
//         if ((cur + maxRest) > max) {
//           max = cur + maxRest;
//         }
//         // max = Math.max(max, cur + maxRest);
//       }
//     }
    
//     return max;

//     function maxProfitFrom(row: number, col: number): number {
//       let max = 0;
//       for (let i = row; i < n; i++) {
//         for (let j = col; j < n; j++) {
//           max = Math.max(max, profit[i][j]);
//         }
//       }
//       return max;
//     }
// };

export default function maxProfit(prices: number[]): number {
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;
  for (let i = 0; i < prices.length; i++) {
    const cur = prices[i];
    buy1 = Math.max(buy1, -cur);
    sell1 = Math.max(sell1, cur + buy1);
    buy2 = Math.max(buy2, sell1 - cur);
    sell2 = Math.max(sell2, cur + buy2);
    // console.log(buy1, sell1, buy2, sell2);
  }

  return sell2;
}