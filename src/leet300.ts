export default function lengthOfLIS(nums: number[]): number {
  const dp: DP[] = [{ length: 0, max: -Infinity }];
  const max = 0;
  for (let i = 0; i < nums.length; i++) {
    let maxLength: number = -1;
    for (let j = 0; j <= i; j++) {
      console.log(`cur ${nums[i]}, j ${j}: ${JSON.stringify(dp[j])}`)
      // const r = nums[i] > dp[j].max && dp[j].length > maxLength
      if (nums[i] > dp[j].max && dp[j].length > maxLength) {
        maxLength = dp[j].length;
      }
    }
    dp[i + 1] = { length: maxLength + 1, max: nums[i]};
    console.log(dp)
  }
  console.log(dp);
  return Math.max(...dp.map(i => i.length));
};

type DP = {
  length: number
  max: number
}