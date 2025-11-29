function minOperations(nums: number[], k: number): number {
  return nums.reduce((prev, sum) => prev + sum, 0) % k;
}

minOperations([3, 9, 7], 5); // 4
