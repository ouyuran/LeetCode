export default function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) return false;
  const halfIndex = Math.floor(matrix.length / 2);
  return bns(matrix[halfIndex], target) ||
    searchMatrix(matrix.slice(0, halfIndex), target) ||
    searchMatrix(matrix.slice(halfIndex + 1), target);
};

export function bns(arr: number[], target: number): boolean {
  if (arr.length === 0) return false;
  if (target < arr[0] || target > arr[arr.length - 1]) return false;
  if (arr[0] == target) return true;
  const halfIndex = Math.floor(arr.length / 2)
  return bns(arr.slice(0, halfIndex), target) || bns(arr.slice(halfIndex, arr.length), target);
}