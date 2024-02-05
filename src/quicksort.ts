export default function fn(nums: number[]): number[] {

  doSort(0, nums.length);
  return nums;

  function doSort(start: number, end: number) {
    if (start < end) {
      const j = partition(start, end);
      doSort(start, j);
      doSort(j + 1, end);
    }
  }
  
  function partition(start: number, end: number): number {
    const pivot: number = nums[start];
    let i = start;
    let j = end;
    while(true) {
      do { 
        i++;
      } while(nums[i] <= pivot)
      do {
        j--;
      } while(nums[j] > pivot)
      if (i < j) {
        swap(i, j);
      } else {
        break;
      }
    }
    swap(start, j);
    return j;
  }

  function swap(i: number, j: number): void {
    if (i === j) return;
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}

