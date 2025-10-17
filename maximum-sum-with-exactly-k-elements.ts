function maximizeSum(nums: number[], k: number): number {
  let max = Math.max(...nums);
  return ((max + k) * (max + k - 1)) / 2 - (max * (max - 1)) / 2;
}
