export default function longestOnes(nums: number[], k: number): number {
    const maxK = k;
    let start: number = 0;
    let end: number = 0;
    let max: number = 0;

    while(end <= nums.length) {
      if(k > 0) {
        end++;
        if(nums[end] === 0) {
          k--;
        }
      } else {
        if(nums[start++] === 0) {
          k++;
          k = Math.max(k, maxK);
        }
      }
      
      max = Math.max(max, end - start);
      
    }

    return max;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))