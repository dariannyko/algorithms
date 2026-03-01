function smallestRangeI(nums: number[], k: number): number {
  const max = Math.max(...nums) - k;
  const min = Math.min(...nums) + k;

  return max - min < 0 ? 0 : max - min;
}
