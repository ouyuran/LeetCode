export default function maxSubarraySumCircular(nums: number[]): number {
  let begin = nums[0];
  let beginIndex = 0;
  let end = nums[0];
  for (let i = 1; i < nums.length * 2; i++) {
    const cur = nums[i % nums.length];
    if (begin > 0) {
      begin = begin + cur;
    } else {
      begin = cur;
      beginIndex = i;
    }
    begin = Math.max(
      begin + cur,
      cur
    )
    end = Math.max(
      end,
      begin
    )
    
    // console.log(begin, end)
  }

  return end;
};