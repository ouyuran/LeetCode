export default function findPeakElement(nums: number[]): number {
  return doFind(0, nums.length - 1) as number;

  function doFind(l: number, r: number): number | undefined {
    console.log(l, r)
    if (l === r) return l;
    let i = Math.floor((l + r) / 2);
    if (nums[i] > (nums[i - 1] ?? -Infinity) && nums[i] > (nums[i + 1] ?? -Infinity)) return i;
    else if (nums[i] > (nums[i - 1] ?? -Infinity)) {
      return doFind(i + 1, r);
    } else if (nums[i] < (nums[i - 1] ?? -Infinity)) {
      return doFind(l, i - 1);
    }
  }
};