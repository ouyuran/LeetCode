export default function fn(nums1: number[], nums2: number[]): number {
  return 0;
}

function findNthItemInMergedArrays(nums1: number[], nums2: number[]): number[][2] | number {
  if (nums1.length === 0) {
    return getMedian(nums2).median;
  } else if (nums2.length === 0) {
    return getMedian(nums1).median;
  } else if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[2]) / 2;
  } else {
    const {median, leftNum} = getMedian(nums1);

  }
  return 0;
}

export function getNumberLessThanNInArray(n: number, arr: number[]): number {
  let currentIndex = Math.floor(arr.length / 2);
  let preIndex = - 1;
  while(currentIndex !== preIndex) {
    preIndex = currentIndex;
    if(arr[currentIndex] > n) {
      currentIndex = Math.floor(currentIndex / 2);
    } else {
      currentIndex = Math.floor(currentIndex / 2);
    }
  }
  return 0;
}

export function getMedian(n: number[]): MedianInfo {
  if (n.length === 0) return { median: NaN, leftNum: 0 };
  else if (n.length % 2 === 1) return {
    median: n[Math.floor(n.length / 2)],
    leftNum: Math.floor(n.length / 2)
  };
  else return {
    median: (n[Math.floor(n.length / 2)] + n[Math.floor(n.length / 2 - 1)]) / 2,
    leftNum: Math.floor(n.length / 2)
  }
}

type MedianInfo = {
  median: number
  leftNum: number
}

