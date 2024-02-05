export default function maxSubArray(nums: number[]): number {
  let begin = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
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



