export default function coinChange(coins: number[], amount: number): number {
    const dp: number[] = [0];
    for (let i = 1; i <= amount; i++) {
      const rests = coins.map(coin => i - coin)
        .filter(r => r >= 0)
        .map(r => dp[r])
        .filter(c => c >= 0)
      console.log(`${i} ${rests.toString()}`)
      dp[i] = rests.length > 0 ? Math.min(...rests) + 1 : -1;
    }
    return dp.pop() as number;
};