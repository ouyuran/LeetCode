export default function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) {
      return 0;
    }
    intervals.sort((a, b) => a[1] - b [1]);
    let nums = 1;
    let left = intervals[0];
    const out = [left]
    for (let i = 1; i < intervals.length; i++) {
      let right = intervals[i];
      if (overlap(left, right)) {
        continue;
      } else {
        left = right;
        out.push(right);
        nums++;
      }
    }
    return intervals.length - nums;
};

export function overlap(i1: number[], i2: number[]): boolean {
  const [start1, end1] = i1;
  const [start2, end2] = i2;
  if (end1 <= start2 || end2 <= start1) {
    return false;
  } else {
    return true;
  }
}

export function compare(i1: number[], i2: number[]): number {
  const [start1, end1] = i1;
  const [start2, end2] = i2;
  if (start1 === start2) {
    return end2 - end1;
  } else {
    return start1 - start2;
  }
}