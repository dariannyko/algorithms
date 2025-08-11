function minOperations(nums: number[], k: number): number {
  return nums.reduce((prev, sum) => prev + sum, 0) % k;
}
