export default function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const arr: number[] = [];
  arr[0] = 0;
  arr[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const i_1 = arr[i];
    const i_2 = arr[i - 1];
    arr[i + 1] = Math.max(i_1, i_2 + nums[i])
  }
  console.log(arr)
  return arr.pop() as number;
};