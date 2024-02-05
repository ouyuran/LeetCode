export default function fn(nums: number[], k: number): number {
  // const nums = [...new Set(nums)];
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length - i - 1; j ++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
  return nums[nums.length - k];
}