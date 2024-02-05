function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = getSize(left, right);
    while(left != right) {
      if(height[left] <= height[right]) {
        left++;
      } else {
        right--;
      }
      max = Math.max(getSize(left, right), max)
    }
    return max
    function getSize(left: number, right: number): number {
      return Math.min(height[left], height[right]) * (right - left);
    }
};



// let test11: number[] = [1,8,6,2,5,4,8,3,7];
let test11: number[] = [2,3,10,5,7,8,9]
console.log(maxArea(test11)) // 49